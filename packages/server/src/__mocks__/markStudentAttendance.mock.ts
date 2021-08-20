export const currentClassroomAssistanceMock = {
  classroomId: 'b000',
  assistance: [
    {
      createdAt: '20/07/2021 8:00:00am',
      students: [
        {
          studentId: 'b100',
        },
        {
          studentId: 'b101',
        },
        {
          studentId: 'b102',
        },
      ],
    },
    {
      createdAt: '20/07/2021 9:00:00am',
      students: [
        {
          studentId: 'b200',
        },
        {
          studentId: 'me',
        },
        {
          studentId: 'b202',
        },
      ],
    },
  ],
};

export const classroomCalendarMock = [
  {
    classroomId: 'a000',
    assistance: [
      {
        createdAt: '20/07/2021 10:00:00am',
        students: [
          {
            studentId: 'a100',
          },
          {
            studentId: 'a101',
          },
          {
            studentId: 'a102',
            reason: 'important',
          },
        ],
      },
    ],
  },
  currentClassroomAssistanceMock,
];
