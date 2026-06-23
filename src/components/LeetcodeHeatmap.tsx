"use client";

import React, { useEffect, useState } from "react";

export default function LeetcodeHeatmap() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch LeetCode calendar data using alfa-leetcode-api
    fetch("https://alfa-leetcode-api.onrender.com/its_Vish/calendar")
      .then((res) => res.json())
      .then((data) => {
        if (data.submissionCalendar) {
          const parsed = JSON.parse(data.submissionCalendar);
          setData(parsed);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch LeetCode data", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && data && scrollContainerRef.current) {
      // Small timeout ensures the DOM has painted the blocks before scrolling
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
        }
      }, 50);
    }
  }, [loading, data]);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center p-8 bg-[#0A0A0A] border border-[#232326] rounded-2xl shadow-sm">
        <div className="animate-pulse flex gap-1 overflow-hidden opacity-50">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, j) => (
                <div key={j} className="w-3 h-3 rounded-sm bg-[#161618]" />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  // Process data into 52 weeks of 7 days
  const today = new Date();
  const startDate = new Date(today);
  startDate.setFullYear(today.getFullYear() - 1);

  // Map timestamps to dates
  const dateCounts: Record<string, number> = {};
  let totalSubmissions = 0;
  let activeDays = 0;

  for (const [timestamp, count] of Object.entries(data)) {
    const date = new Date(parseInt(timestamp) * 1000);
    const dateStr = date.toISOString().split("T")[0];
    dateCounts[dateStr] = count as number;
    totalSubmissions += count as number;
    activeDays++;
  }

  // Generate weeks
  const weeks = [];
  let currentDate = new Date(startDate);
  // Rewind to the nearest Sunday
  currentDate.setDate(currentDate.getDate() - currentDate.getDay());

  for (let w = 0; w < 52; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const dateStr = currentDate.toISOString().split("T")[0];
      const count = dateCounts[dateStr] || 0;
      week.push({
        date: dateStr,
        count: count,
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push(week);
  }

  return (
    <div className="w-full bg-[#0A0A0A] border border-[#232326] p-6 rounded-2xl shadow-sm overflow-hidden flex flex-col gap-4">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-white text-sm font-semibold flex items-center gap-2">
          <svg className="w-4 h-4 text-[#F7931E]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.536-.536.553-1.387.039-1.901l-2.666-2.577c-1.185-1.184-2.824-1.742-4.631-1.742s-3.446.558-4.631 1.742l-4.319 4.38c-1.185 1.184-1.808 2.766-1.808 4.573s.623 3.389 1.808 4.573l4.332 4.363c1.185 1.184 2.824 1.742 4.631 1.742s3.446-.558 4.631-1.742l2.666-2.577c.514-.514.496-1.365-.039-1.901-.535-.535-1.386-.553-1.9-.038zm1.096-7.839h-9.176c-.733 0-1.326.593-1.326 1.326s.593 1.326 1.326 1.326h9.176c.733 0 1.326-.593 1.326-1.326s-.593-1.326-1.326-1.326z"/>
          </svg>
          LeetCode Submissions
        </h3>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
      >
        <div className="flex gap-1 min-w-max">
          {weeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-1">
              {week.map((day, j) => {
                let bg = "bg-[#161618]";
                let border = "border border-[#232326]";
                if (day.count > 0) { bg = "bg-[#0e4429]"; border = "border-[#0e4429]"; }
                if (day.count > 2) { bg = "bg-[#006d32]"; border = "border-[#006d32]"; }
                if (day.count > 4) { bg = "bg-[#26a641]"; border = "border-[#26a641]"; }
                if (day.count > 6) { bg = "bg-[#39d353]"; border = "border-[#39d353]"; }
                
                return (
                  <div 
                    key={j} 
                    className={`w-3 h-3 rounded-sm ${bg} ${border} transition-colors hover:border-white`}
                    title={`${day.count} submissions on ${day.date}`} 
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
