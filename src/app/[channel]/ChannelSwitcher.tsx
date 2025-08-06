// src/app/[channel]/ChannelSwitcher.tsx
"use client";

import { Channel } from "@/types/global"; // opsional, atau gunakan inline type

type ChannelSwitcherProps = {
  currentChannel: string;
  channels: { slug: string; name: string }[];
};

export default function ChannelSwitcher({ currentChannel, channels }: ChannelSwitcherProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.location.href = `/${e.target.value}`;
  };

  return (
    <div>
      <label htmlFor="channel-select" className="mr-2">Store:</label>
      <select
        id="channel-select"
        value={currentChannel}
        onChange={handleChange}
        className="border rounded px-2 py-1 text-sm"
      >
        {channels.map((ch) => (
          <option key={ch.slug} value={ch.slug}>
            {ch.name}
          </option>
        ))}
      </select>
    </div>
  );
}