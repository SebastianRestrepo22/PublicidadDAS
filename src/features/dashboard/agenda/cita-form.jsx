import React, { useState, useEffect } from "react";

export default function CitaForm({ appointment, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    client: "",
    service: "",
    status: "pendiente",
    priority: "media",
  });

  useEffect(() => {
    if (appointment) {
      setFormData({
        title: appointment.title,
        description: appointment.description,
        date: appointment.date.toISOString().split("T")[0],
        time: appointment.time,
        client: appointment.client,
        service: appointment.service,
        status: appointment.status,
        priority: appointment.priority,
      });
    }
  }, [appointment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentData = {
      ...formData,
      date: new Date(formData.date),
    };
    onSubmit(appointmentData);
  };

  const services = [
    "Tarjetas de Presentación","Volantes","Carteles","Folletos",
    "Catálogos","Invitaciones","Etiquetas","Calendarios","Otros",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label>Título *</label>
          <input
            className="w-full border p-2 rounded"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Ej: Impresión tarjetas"
            required
          />
        </div>

        <div className="space-y-2">
          <label>Cliente *</label>
          <input
            className="w-full border p-2 rounded"
            value={formData.client}
            onChange={(e) => setFormData({ ...formData, client: e.target.value })}
            placeholder="Nombre del cliente"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label>Descripción</label>
        <textarea
          className="w-full border p-2 rounded"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Detalles del trabajo a realizar..."
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label>Fecha *</label>
          <input
            type="date"
            className="w-full border p-2 rounded"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label>Hora *</label>
          <input
            type="time"
            className="w-full border p-2 rounded"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <label>Servicio</label>
          <select
            className="w-full border p-2 rounded"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            <option value="">Seleccionar servicio</option>
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label>Estado</label>
          <select
            className="w-full border p-2 rounded"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <option value="pendiente">Pendiente</option>
            <option value="confirmado">Confirmado</option>
            <option value="completado">Completado</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>

        <div className="space-y-2">
          <label>Prioridad</label>
          <select
            className="w-full border p-2 rounded"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
          >
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1 rounded border"
        >
          Cancelar
        </button>
        <button type="submit" className="px-3 py-1 rounded bg-blue-500 text-white">
          {appointment ? "Actualizar" : "Crear"} Cita
        </button>
      </div>
    </form>
  );
}
