import React, { useState } from "react";
import { Activity } from "../types";
import { ActivitySection } from "./ActivitySection";

export const Quote = () => {
  // this variable will be modified as the sub-components update
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = () => {
    const newActivity: Activity = {
      workItems: [
        {
          type: "labor",
          quantity: 0,
          rate: 0,
        },
        {
          type: "equipment",
          quantity: 0,
          rate: 0,
        },
        {
          type: "other",
          quantity: 0,
          rate: 0,
        },
      ],
    };

    setActivities([...activities, newActivity]);
  };

  const renderActivities = () => {
    return activities.map((activity) => (
      <ActivitySection
        activity={activity}
        adjustActivity={setActivities}
      />
    ));
  };

  return (
    <div>
      <h2>Quote page</h2>
      <p>
        <a href="https://www.sketch.com/s/0bb9aa72-a1b5-4c41-9ee9-9bbe8c0c88ec/a/GE914w/play">
          View mockup board here
        </a>
        <h4>Instructions</h4>
        <p>
          <em>
            Note, types are already in the types.ts file, but feel free to add
            to them if needed.
          </em>
        </p>

        <h4>Tasks</h4>
        <ol>
          <li>
            Add activity button should create new Activity section (ignore the
            modal step in mockup for now)
          </li>
          <li>
            Activity section should one empty row of each type
            (labor/equip/other)
          </li>
          <li>
            For now, just make up fake options for each, eventually they will be
            pulled via an API
          </li>
          <li>
            Totals at the bottom are calculated by going through the activities
            variable and adding things up
          </li>
        </ol>
      </p>
      <button onClick={addActivity}>Add Activity</button>
      {renderActivities()}
    </div>
  );
};
