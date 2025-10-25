import React from "react";
import { Calendar, TrendingUp } from "lucide-react";

const generateRandomDates = (count: number): string[] => {
  const dates: string[] = [];
  const usedDates = new Set<string>();
  
  while (dates.length < count) {
    const day = Math.floor(Math.random() * 28) + 1;
    const month = Math.floor(Math.random() * 12) + 1;
    const year = 2025;
    const dateStr = `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
    
    if (!usedDates.has(dateStr)) {
      dates.push(dateStr);
      usedDates.add(dateStr);
    }
  }
  
  return dates.sort();
};

const AttendancePage: React.FC = () => {
  const presentDates = generateRandomDates(Math.floor(Math.random() * 8) + 15);
  const absentDates = generateRandomDates(Math.floor(Math.random() * 5) + 3);
  const totalDays = presentDates.length + absentDates.length;
  const attendancePercent = Math.floor((presentDates.length / totalDays) * 100);

  return (
    <div style={{ 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "2.5rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
      }}>
        {/* Header Section */}
        <div style={{ 
          marginBottom: "2rem",
          paddingBottom: "1.5rem",
          borderBottom: "2px solid #e5e7eb"
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: "1.875rem", 
            color: "#1f2937",
            fontWeight: "700",
            textAlign: "center"
          }}>
            Attendance Overview
          </h1>
        </div>

        {/* Stats Cards */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "1.25rem",
          marginBottom: "2.5rem"
        }}>
          <div style={{
            padding: "1.5rem",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            color: "white"
          }}>
            <div style={{ fontSize: "0.875rem", opacity: 0.9, marginBottom: "0.5rem" }}>
              Attendance Rate
            </div>
            <div style={{ 
              fontSize: "2.5rem", 
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              {attendancePercent}%
              <TrendingUp size={24} />
            </div>
          </div>

          <div style={{
            padding: "1.5rem",
            borderRadius: "12px",
            backgroundColor: "#f0fdf4",
            border: "2px solid #86efac"
          }}>
            <div style={{ fontSize: "0.875rem", color: "#166534", marginBottom: "0.5rem" }}>
              Days Present
            </div>
            <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#15803d" }}>
              {presentDates.length}
            </div>
          </div>

          <div style={{
            padding: "1.5rem",
            borderRadius: "12px",
            backgroundColor: "#fef2f2",
            border: "2px solid #fca5a5"
          }}>
            <div style={{ fontSize: "0.875rem", color: "#991b1b", marginBottom: "0.5rem" }}>
              Days Absent
            </div>
            <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#dc2626" }}>
              {absentDates.length}
            </div>
          </div>
        </div>

        {/* Present Dates Section */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1rem"
          }}>
            <Calendar color="#10b981" size={24} />
            <h2 style={{ 
              margin: 0, 
              fontSize: "1.5rem", 
              color: "#1f2937",
              fontWeight: "600"
            }}>
              Present Dates
            </h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: "0.75rem"
          }}>
            {presentDates.map((date, idx) => (
              <div
                key={idx}
                style={{
                  padding: "0.75rem",
                  backgroundColor: "#f0fdf4",
                  border: "2px solid #86efac",
                  borderRadius: "8px",
                  textAlign: "center",
                  color: "#166534",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  transition: "all 0.2s",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(16, 185, 129, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {date}
              </div>
            ))}
          </div>
        </div>

        {/* Absent Dates Section */}
        <div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1rem"
          }}>
            <Calendar color="#dc2626" size={24} />
            <h2 style={{ 
              margin: 0, 
              fontSize: "1.5rem", 
              color: "#1f2937",
              fontWeight: "600"
            }}>
              Absent Dates
            </h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: "0.75rem"
          }}>
            {absentDates.map((date, idx) => (
              <div
                key={idx}
                style={{
                  padding: "0.75rem",
                  backgroundColor: "#fef2f2",
                  border: "2px solid #fca5a5",
                  borderRadius: "8px",
                  textAlign: "center",
                  color: "#991b1b",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  transition: "all 0.2s",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(220, 38, 38, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {date}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;