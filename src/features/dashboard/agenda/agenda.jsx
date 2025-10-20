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
          apt.id === editingAppointment.id
            ? { ...appointmentData, id: editingAppointment.id }
            : apt
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
    return appointments.filter(
      (apt) => apt.date.toDateString() === date.toDateString()
    );
  };

  return (
    <div className="w-full min-h-screen bg-white px-8 pt-4 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Agenda</h1>
          <p className="text-gray-500">Gestiona tus citas y trabajos</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Toggle vista */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("calendar")}
              className={`px-4 py-2 text-sm font-medium ${
                viewMode === "calendar"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Calendario
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 text-sm font-medium ${
                viewMode === "list"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Lista
            </button>
          </div>

          {/* Botón nueva cita */}
          <button
            onClick={() => {
              setEditingAppointment(null);
              setIsFormOpen(true);
            }}
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            Nueva cita
          </button>
        </div>
      </div>

      {/* Modal formulario */}
      {isFormOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">
              {editingAppointment ? "Editar Cita" : "Nueva Cita"}
            </h2>
            <CitaForm
              appointment={editingAppointment}
              onSubmit={
                editingAppointment
                  ? handleUpdateAppointment
                  : handleCreateAppointment
              }
              onCancel={() => {
                setIsFormOpen(false);
                setEditingAppointment(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Contenido principal → solo si no está abierto el modal */}
      {!isFormOpen &&
        (viewMode === "calendar" ? (
          <div className="flex justify-center mt-6">
            <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow">
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
                appointments={appointments}
                getAppointmentsForDate={getAppointmentsForDate}
              />
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow mt-6">
            <CitaList
              appointments={appointments}
              onEdit={handleEditAppointment}
              onDelete={handleDeleteAppointment}
              showDate={true}
            />
          </div>
        ))}
    </div>
  );
}
