"use client";

import { useContext } from "react";
import { MsgData } from "@/context/context";
import { ToastContainer, toast } from "react-toastify";
const call = () => toast("The Call Started!");
const video = () => toast("The Video Started!");
const text = () => toast("The Text Started!");

import React from "react";
import {
  Archive,
  BellOff,
  Phone,
  MessageSquare,
  Trash2,
  Video,
  Pencil,
} from "lucide-react";

const statusColor = {
  Overdue: "bg-red-500 text-white",
  "Almost Due": "bg-yellow-400 text-white",
  "On Track": "bg-green-900 text-white",
  "Need Attention": "bg-red-500 text-white",
};

function SideButton({ icon: Icon, label, danger = false }) {
  return (
    <button
      className={`flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium ${
        danger === true
          ? "border-red-200 text-red-500 hover:bg-red-50"
          : "border-slate-200 text-slate-600 hover:bg-slate-50"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}

export default function DetailsUi({ friend }) {
  const { setMessage } = useContext(MsgData);

  let firstTag = friend.tags[0];

  let secondTag = friend.tags[1];

  let nowStatColor = "bg-slate-200 text-slate-700";
  if (statusColor[friend.status]) {
    nowStatColor = statusColor[friend.status];
  }

  function sendData(actionLabel) {
    let contact = "";

    if (actionLabel === "Call") {
      if (friend.quickCheckIn.call) {
        contact = friend.quickCheckIn.call;
      }
    } else if (actionLabel === "Text") {
      if (friend.quickCheckIn.text) {
        contact = friend.quickCheckIn.text;
      }
    } else if (actionLabel === "Video") {
      if (friend.quickCheckIn.video) {
        contact = friend.quickCheckIn.video;
      }
    }

    const newMessage = {
      name: friend.name,
      type: actionLabel,
      contact: contact,
    };

    setMessage((prev) => {
      return [...prev, newMessage];
    });
  }

  return (
    <section className="w-full bg-slate-100 p-6 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="mb-3 h-20 w-20 rounded-full object-cover"
                />

                <h2 className="text-lg font-semibold text-slate-800">
                  {friend.name}
                </h2>

                <div className="mt-3 flex flex-col items-center gap-2">
                  <div
                    className={`rounded-full px-2 py-1 text-xs font-medium ${nowStatColor}`}
                  >
                    {friend.status}
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-1">
                    {
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium uppercase text-green-700">
                        {firstTag}
                      </span>
                    }

                    {secondTag !== "" && (
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium uppercase text-green-700">
                        {secondTag}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm italic text-slate-500">
                  {friend.notes}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  Preferred: {friend.preferredContact}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <SideButton icon={BellOff} label={friend.actions.snoozeDays} />
              <SideButton icon={Archive} label="Archive" />
              <SideButton icon={Trash2} label="Delete" danger={true} />
            </div>
          </div>

          <div className="space-y-4 lg:col-span-3">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-emerald-800">
                  {friend.daysSinceContact}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Days Since Contact
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-emerald-800">
                  {friend.goalDays}
                </p>
                <p className="mt-2 text-sm text-slate-500">Goal (Days)</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-emerald-800">
                  {friend.nextDueDate}
                </p>
                <p className="mt-2 text-sm text-slate-500">Next Due</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-700">
                    Relationship Goal
                  </h3>
                  <p className="mt-4 text-sm text-slate-500">
                    {friend.relationshipGoal}
                  </p>
                </div>

                <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
                  <Pencil className="h-4 w-4" />
                  Edit
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="mb-4 text-sm font-semibold text-slate-700">
                Quick Check-In
              </h3>

              <div className="grid gap-4 sm:grid-cols-3">
                <button
                  onClick={() => {
                    sendData("Call");
                    call();
                  }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 py-8 text-slate-600 hover:bg-slate-100"
                >
                  <Phone className="mb-3 h-6 w-6" />
                  <span className="text-sm font-medium">Call</span>
                </button>

                <button
                  onClick={() => {
                    sendData("Text");
                    text();
                  }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 py-8 text-slate-600 hover:bg-slate-100"
                >
                  <MessageSquare className="mb-3 h-6 w-6" />
                  <span className="text-sm font-medium">Text</span>
                </button>

                <button
                  onClick={() => {
                    sendData("Video");
                    video();
                  }}
                  className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 py-8 text-slate-600 hover:bg-slate-100"
                >
                  <Video className="mb-3 h-6 w-6" />
                  <span className="text-sm font-medium">Video</span>
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
