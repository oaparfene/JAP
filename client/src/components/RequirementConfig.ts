const RequirementConfig = {
  columnNames: [
    'ID',
    'Operation',
    'Requester',
    'Status',
    'Location',
    'Coordinates',
    'Coll Start Date',
    'Coll End Date',
    'Coll Start Time',
    'Coll End Time',
    'Intel Discipline',
    'Required Information',
    'LTIOV'
  ],
  keys: ['ID', 'Operation', 'Requester', 'Status', 'Location', 'Coordinates', 'Coll_Start_Date', 'Coll_End_Date', 'Coll_Start_Time', 'Coll_End_Time', 'Intel_Discipline', 'Required_Information', 'LTIOV'],
  fileName: 'data.xlsx',
  sheetName: 'Personal Info',
};

export { RequirementConfig };
