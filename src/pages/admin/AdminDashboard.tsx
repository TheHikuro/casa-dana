import { Check, X, Users, Calendar, Phone, Mail } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { useToaster } from '../../utils/providers/toaster.provider.tsx'
import { Link } from 'react-router-dom'
import {
  useGetReservations,
  usePatchReservationsId
} from '../../api/endpoints/reservations/reservations.ts'
import { ReservationStatus } from '../../api/models'
import { format } from 'date-fns'
import { useDeleteCalendarId } from '../../api/endpoints/calendar/calendar.ts'

export default function AdminDashboard() {
  const toaster = useToaster()

  const { mutate: approuveReservation } = usePatchReservationsId()
  const { mutate: deleteReservation } = useDeleteCalendarId()
  const { data: { data: reservations = [] } = {}, refetch } =
    useGetReservations()
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
        onError: (error) => {
          toaster?.error(error.message)
        }
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
        onError: (error) => {
          toaster?.error(error.message)
        }
      }
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Reservation Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-scroll h-[90dvh]">
        {reservations?.map((reservation) => (
          <Card key={reservation.id} className="w-full h-fit">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>
                  {reservation.firstName} {reservation.lastName}
                </CardTitle>
              </div>
              <CardDescription>Reservation #{reservation.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>
                    {reservation.firstName} - {reservation.lastName}
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>
                    {format(new Date(reservation.start), 'dd/MM/yyyy')} -{' '}
                    {format(new Date(reservation.end), 'dd/MM/yyyy')}
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>{reservation.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <Link
                    to={`mailto:${reservation.email}`}
                    className={'text-blue-500'}
                  >
                    {reservation.email}
                  </Link>
                </div>

                <div className="mt-2">
                  <strong>Description:</strong>
                  <p>{reservation.description}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              {reservation.status === ReservationStatus.NUMBER_0 && (
                <>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(reservation.id!)}
                  >
                    <X className="mr-2 h-4 w-4" /> Refuser
                  </Button>
                  <Button
                    className="bg-green-500 hover:bg-green-600"
                    size="sm"
                    onClick={() =>
                      handleUpdate(reservation.id!, ReservationStatus.NUMBER_1)
                    }
                  >
                    <Check className="mr-2 h-4 w-4" /> Accepter
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
