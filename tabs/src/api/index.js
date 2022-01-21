import ajax from "./ajax";

const BASE = "https://api.leoyun.xyz/api/";

export const reqObjectives = (
  Name,
  Type,
  Priority,
  Completion,
  NoKeyResults,
  Status,
  StartDate,
  EndDate,
  Description,
  ObjectiveStatus
) =>
  ajax(
    BASE + "/objectives",
    {
      Name,
      Type,
      Priority,
      Completion,
      NoKeyResults,
      Status,
      StartDate,
      EndDate,
      Description,
      ObjectiveStatus,
    },
    "Get"
  );

