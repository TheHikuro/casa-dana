import { useReservationsDataGrid } from '@/pages/admin/contents/reservations/reservation.utils.tsx'
import {
  useGetReservations,
  usePatchReservationsId,
  useDeleteReservationsId
} from '@/api/endpoints/reservations/reservations.ts'
import { useToaster } from '@/utils/providers/toaster.provider.tsx'
import { ReservationStatus } from '@/api/models'
import { DataTable } from '@/components/data-grid.tsx'

export default function ReservationsAdmin() {
  const toaster = useToaster()

  const { data: { data: reservations = [] } = {}, refetch } =
    useGetReservations()

  const { mutate: approuveReservation } = usePatchReservationsId()
  const { mutate: deleteReservation } = useDeleteReservationsId()

  const handleUpdate = (id: string, status: ReservationStatus) => {
    approuveReservation(
      {
        id,
        params: { status }
      },
      {
        onSuccess: async () => {
          toaster?.success('Reservation approuvée')
          await refetch()
        },
        onError: (error) => toaster?.error(error.message)
      }
    )
  }

  const handleDelete = (id: string) => {
    deleteReservation(
      { id },
      {
        onSuccess: async () => {
          toaster?.success('Reservation supprimée')
          await refetch()
        },
        onError: (error) => toaster?.error(error.message)
      }
    )
  }

  const { columns } = useReservationsDataGrid({ handleUpdate, handleDelete })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Demande de réservations</h1>
      <DataTable columns={columns} data={reservations} />
    </div>
  )
}
