import React, { useState } from "react";
import Calendar from "./calendar";
import CitaForm from "./cita-form";
import CitaList from "./cita-list";

export default function Agenda() {
  const [appointments, setAppointments] = useState([
    {
      id: "1",
      title: "Impresión Tarjetas de Presentación",
      description: "Cliente solicita 500 tarjetas de presentación en papel couché",
      date: new Date(2025, 8, 25),
      time: "10:00",
      client: "Juan Pérez",
      service: "Tarjetas de Presentación",
      status: "confirmado",
      priority: "media",
    },
    {
      id: "2",
      title: "Banner Publicitario",
      description: "Banner 2x1 metros para evento corporativo",
      date: new Date(2025, 8, 26),
      time: "14:30",
      client: "Empresa ABC",
      service: "Banner",
      status: "pendiente",
      priority: "alta",
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [viewMode, setViewMode] = useState("calendar");

  const handleCreateAppointment = (appointmentData) => {
    const newAppointment = {
      ...appointmentData,
      id: Date.now().toString(),
    };
    setAppointments([...appointments, newAppointment]);
    setIsFormOpen(false);
  };

  const handleUpdateAppointment = (appointmentData) => {
    if (editingAppointment) {
      setAppointments(
        appointments.map((apt) =>
          apt.id === editingAppointment.id ? { ...appointmentData, id: editingAppointment.id } : apt
        )
      );
      setEditingAppointment(null);
      setIsFormOpen(false);
    }
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter((apt) => apt.id !== id));
  };

  const handleEditAppointment = (appointment) => {
    setEditingAppointment(appointment);
    setIsFormOpen(true);
  };

  const getAppointmentsForDate = (date) => {
    return appointments.filter((apt) => apt.date.toDateString() === date.toDateString());
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Agenda</h1>
          <p className="text-muted-foreground">Gestiona tus citas y trabajos de litografía</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setViewMode("calendar")}
              className={`px-3 py-1 rounded ${viewMode === "calendar" ? "bg-gray-200" : ""}`}
            >
              Calendario
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1 rounded ${viewMode === "list" ? "bg-gray-200" : ""}`}
            >
              Lista
            </button>
          </div>

          <button
            onClick={() => {
              setEditingAppointment(null);
              setIsFormOpen(true);
            }}
            className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Nueva Cita
          </button>
        </div>
      </div>

      {/* Modal del formulario */}
      {isFormOpen && (
        <div className="max-w-2xl mx-auto bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">
            {editingAppointment ? "Editar Cita" : "Nueva Cita"}
          </h2>
          <CitaForm
            appointment={editingAppointment}
            onSubmit={editingAppointment ? handleUpdateAppointment : handleCreateAppointment}
            onCancel={() => {
              setIsFormOpen(false);
              setEditingAppointment(null);
            }}
          />
        </div>
      )}

      {viewMode === "calendar" ? (
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-white p-4 rounded shadow">
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              appointments={appointments}
              getAppointmentsForDate={getAppointmentsForDate}
            />
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded shadow">
          <CitaList
            appointments={appointments}
            onEdit={handleEditAppointment}
            onDelete={handleDeleteAppointment}
            showDate={true}
          />
        </div>
      )}
    </div>
  );
}
