import { ColumnDef } from '@tanstack/react-table'
import { Calendar, Check, Mail, Phone, Users, X } from 'lucide-react'
import { format } from 'date-fns'
import { Link } from 'react-router'
import { ReservationDto, ReservationStatus } from '@/api/models'
import { Button } from '@/components/ui/button.tsx'

interface UseReservationsDataGridProps {
  handleUpdate: (id: string, status: ReservationStatus) => void
  handleDelete: (id: string) => void
}

export function useReservationsDataGrid({
  handleUpdate,
  handleDelete
}: UseReservationsDataGridProps) {
  const columns: ColumnDef<ReservationDto>[] = [
    {
      accessorKey: 'fullName',
      header: 'Client',
      cell: ({ row }) => (
        <div className="flex items-center">
          <Users className="mr-2 h-4 w-4" />
          {row.original.firstName} {row.original.lastName}
        </div>
      )
    },
    {
      accessorKey: 'date',
      header: 'Dates',
      cell: ({ row }) => (
        <div className="flex items-center">
          <Calendar className="mr-2 h-4 w-4" />
          {format(new Date(row.original.start), 'dd/MM/yyyy')} -{' '}
          {format(new Date(row.original.end), 'dd/MM/yyyy')}
        </div>
      )
    },
    {
      accessorKey: 'phone',
      header: 'Téléphone',
      cell: ({ row }) => (
        <div className="flex items-center">
          <Phone className="mr-2 h-4 w-4" />
          {row.original.phone}
        </div>
      )
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: ({ row }) => (
        <Link to={`mailto:${row.original.email}`} className="text-blue-500">
          <Mail className="mr-2 h-4 w-4 inline" />
          {row.original.email}
        </Link>
      )
    },
    {
      accessorKey: 'status',
      header: 'Statut',
      cell: ({ row }) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-bold ${
            row.original.status === ReservationStatus.NUMBER_1
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {row.original.status === ReservationStatus.NUMBER_1
            ? 'Approuvé'
            : 'En attente'}
        </span>
      )
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex space-x-2">
          {row.original.status === ReservationStatus.NUMBER_0 && (
            <>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(row.original.id!)}
              >
                <X className="mr-2 h-4 w-4" /> Refuser
              </Button>
              <Button
                className="bg-green-500 hover:bg-green-600"
                size="sm"
                onClick={() =>
                  handleUpdate(row.original.id!, ReservationStatus.NUMBER_1)
                }
              >
                <Check className="mr-2 h-4 w-4" /> Accepter
              </Button>
            </>
          )}
        </div>
      )
    }
  ]
  return { columns }
}
