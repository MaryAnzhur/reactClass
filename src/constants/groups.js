const groupNum1 = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 28,
    gender: "Male",
    profession: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane",
    surname: "Smith",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 34,
    gender: "Female",
    profession: "Graphic Designer",
  },
  {
    id: 3,
    name: "Alex",
    surname: "Johnson",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 22,
    gender: "Non-binary",
    profession: "Content Writer",
  },
  {
    id: 4,
    name: "Emily",
    surname: "Brown",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 30,
    gender: "Female",
    profession: "Marketing Specialist",
  },
  {
    id: 5,
    name: "Michael",
    surname: "Davis",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 40,
    gender: "Male",
    profession: "Project Manager",
  },
  {
    id: 6,
    name: "Sarah",
    surname: "Lee",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 26,
    gender: "Female",
    profession: "UX Designer",
  },
  {
    id: 7,
    name: "David",
    surname: "Wilson",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 35,
    gender: "Male",
    profession: "Financial Analyst",
  },
  {
    id: 8,
    name: "Sophia",
    surname: "Martinez",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 29,
    gender: "Female",
    profession: "HR Specialist",
  },
  {
    id: 9,
    name: "Ryan",
    surname: "Taylor",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 33,
    gender: "Male",
    profession: "Photographer",
  },
  {
    id: 10,
    name: "Anna",
    surname: "Clark",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 25,
    gender: "Female",
    profession: "Journalist",
  },
  {
    id: 11,
    name: "Jack",
    surname: "Miller",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 37,
    gender: "Male",
    profession: "Lawyer",
  },
  {
    id: 12,
    name: "Lily",
    surname: "Anderson",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 24,
    gender: "Female",
    profession: "Data Analyst",
  },
  {
    id: 13,
    name: "James",
    surname: "Hall",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 41,
    gender: "Male",
    profession: "Chef",
  },
  {
    id: 14,
    name: "Grace",
    surname: "King",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 27,
    gender: "Female",
    profession: "Teacher",
  },
  {
    id: 15,
    name: "Ethan",
    surname: "Lopez",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 32,
    gender: "Male",
    profession: "Architect",
  },
];

const groupNum2 = [
  {
    id: 16,
    name: "Oliver",
    surname: "Scott",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 29,
    gender: "Male",
    profession: "Doctor",
  },
  {
    id: 17,
    name: "Charlotte",
    surname: "Evans",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 31,
    gender: "Female",
    profession: "Nurse",
  },
  {
    id: 18,
    name: "Lucas",
    surname: "Wright",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 27,
    gender: "Male",
    profession: "Pilot",
  },
  {
    id: 19,
    name: "Amelia",
    surname: "Harris",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 26,
    gender: "Female",
    profession: "Psychologist",
  },
  {
    id: 20,
    name: "Mason",
    surname: "White",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 39,
    gender: "Male",
    profession: "Business Consultant",
  },
  {
    id: 21,
    name: "Ava",
    surname: "Green",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 34,
    gender: "Female",
    profession: "Social Worker",
  },
  {
    id: 22,
    name: "Noah",
    surname: "Moore",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 30,
    gender: "Male",
    profession: "Pharmacist",
  },
  {
    id: 23,
    name: "Isabella",
    surname: "Adams",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 38,
    gender: "Female",
    profession: "Entrepreneur",
  },
  {
    id: 24,
    name: "Liam",
    surname: "Nelson",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 36,
    gender: "Male",
    profession: "Actor",
  },
  {
    id: 25,
    name: "Emily",
    surname: "Carter",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 28,
    gender: "Female",
    profession: "Veterinarian",
  },
  {
    id: 26,
    name: "Sophia",
    surname: "Roberts",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 32,
    gender: "Female",
    profession: "Fashion Designer",
  },
  {
    id: 27,
    name: "Ethan",
    surname: "Mitchell",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 37,
    gender: "Male",
    profession: "Engineer",
  },
  {
    id: 28,
    name: "Abigail",
    surname: "Martinez",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 35,
    gender: "Female",
    profession: "Biologist",
  },
  {
    id: 29,
    name: "Benjamin",
    surname: "Walker",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 40,
    gender: "Male",
    profession: "Scientist",
  },
  {
    id: 30,
    name: "Lily",
    surname: "Phillips",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 25,
    gender: "Female",
    profession: "Accountant",
  },
];

const groupNum3 = [
  {
    id: 31,
    name: "Lily",
    surname: "Phillips",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 25,
    gender: "Female",
    profession: "Accountant",
  },
  {
    id: 32,
    name: "Benjamin",
    surname: "Walker",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 40,
    gender: "Male",
    profession: "Scientist",
  },
  {
    id: 33,
    name: "Abigail",
    surname: "Martinez",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 35,
    gender: "Female",
    profession: "Biologist",
  },
  {
    id: 34,
    name: "Ethan",
    surname: "Mitchell",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 37,
    gender: "Male",
    profession: "Engineer",
  },
  {
    id: 35,
    name: "Sophia",
    surname: "Roberts",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 32,
    gender: "Female",
    profession: "Fashion Designer",
  },
  {
    id: 36,
    name: "Emily",
    surname: "Carter",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 28,
    gender: "Female",
    profession: "Veterinarian",
  },
  {
    id: 37,
    name: "Liam",
    surname: "Nelson",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 36,
    gender: "Male",
    profession: "Actor",
  },
  {
    id: 38,
    name: "Isabella",
    surname: "Adams",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 38,
    gender: "Female",
    profession: "Entrepreneur",
  },
  {
    id: 39,
    name: "Noah",
    surname: "Moore",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 30,
    gender: "Male",
    profession: "Pharmacist",
  },
  {
    id: 40,
    name: "Ava",
    surname: "Green",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 34,
    gender: "Female",
    profession: "Social Worker",
  },
  {
    id: 41,
    name: "Mason",
    surname: "White",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 39,
    gender: "Male",
    profession: "Business Consultant",
  },
  {
    id: 42,
    name: "Amelia",
    surname: "Harris",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 26,
    gender: "Female",
    profession: "Psychologist",
  },
  {
    id: 43,
    name: "Lucas",
    surname: "Wright",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 27,
    gender: "Male",
    profession: "Pilot",
  },
  {
    id: 44,
    name: "Charlotte",
    surname: "Evans",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 31,
    gender: "Female",
    profession: "Nurse",
  },
  {
    id: 45,
    name: "Oliver",
    surname: "Scott",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 29,
    gender: "Male",
    profession: "Doctor",
  },
];

const forTitle = ["Image", "Name", "Surname", "Age", "Gender", "Profession"];

export { groupNum1, groupNum2, groupNum3, forTitle };
