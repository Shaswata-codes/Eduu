import React from "react";

const generateRandomDates = (count: number): string[] => {
  const dates: string[] = [];
  for (let i = 0; i < count; i++) {
    const day = Math.floor(Math.random() * 28) + 1;
    const month = Math.floor(Math.random() * 12) + 1;
    const year = 2025;
    dates.push(`${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`);
  }
  return dates;
};


const AttendancePage: React.FC = () => {
  const usersCount = 5; // number of users
  const attendanceData = Array.from({ length: usersCount }).map(() => {
    const presentDates = generateRandomDates(Math.floor(Math.random() * 5) + 5); // 5-9 dates
    const absentDates = generateRandomDates(Math.floor(Math.random() * 3) + 1); // 1-3 dates
    const attendancePercent = Math.floor((presentDates.length / (presentDates.length + absentDates.length)) * 100);
    return { attendancePercent, presentDates, absentDates };
  });

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#646cffaa", textAlign: "center" }}>Attendance Records</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#646cffaa", color: "white" }}>
            <th style={{ padding: "12px", textAlign: "left" }}>#</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Attendance %</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Present Dates</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Absent Dates</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((user, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "transparent" }}>
              <td style={{ padding: "12px" }}>{index + 1}</td>
              <td style={{ padding: "12px", color: "#646cffaa", fontWeight: "bold" }}>{user.attendancePercent}%</td>
                <td style={{ padding: "12px" }}>{user.presentDates.join(", ")}</td>
              <td style={{ padding: "12px" }}>{user.absentDates.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendancePage;