import { Check, X, Users, Calendar, Phone, Mail } from 'lucide-react'
import { useGetReservations } from '../../utils/hooks'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { useDeleteReservation } from './hooks/useDeleteReservation'
import { useUpdateReservation } from './hooks/useUpdateReservation.ts'
import { useToaster } from '../../utils/providers/toaster.provider.tsx'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  const { reservations, refetch } = useGetReservations()
  const { mutate: deleteReservation } = useDeleteReservation()
  const { mutate: updateReservation } = useUpdateReservation()
  const toaster = useToaster()
  const handleDelete = (id: string) => {
    deleteReservation(
      { id },
      {
        onSuccess: async () => {
          toaster?.success('Reservation à bien été supprimée')
          await refetch()
        },
        onError: (error) => {
          toaster?.error(error.message)
        }
      }
    )
  }

  const handleUpdate = (id: string, status: boolean) => {
    updateReservation(
      { id, status },
      {
        onSuccess: async () => {
          toaster?.success('Reservation à bien été acceptée')
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
                <CardTitle>{reservation.name}</CardTitle>
              </div>
              <CardDescription>Reservation #{reservation.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>
                    {reservation.firstname} - {reservation.lastname}
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>
                    {reservation.start} - {reservation.end}
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
              {reservation.status === false && (
                <>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(reservation.id)}
                  >
                    <X className="mr-2 h-4 w-4" /> Refuser
                  </Button>
                  <Button
                    className="bg-green-500 hover:bg-green-600"
                    size="sm"
                    onClick={() => handleUpdate(reservation.id, true)}
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
