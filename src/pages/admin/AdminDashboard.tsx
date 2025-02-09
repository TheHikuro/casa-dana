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

export default function AdminDashboard() {
  const toaster = useToaster()
  const handleDelete = (id: string) => {
    console.log(id)
  }

  const handleUpdate = (id: string, status: boolean) => {
    console.log(id, status)
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Reservation Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-scroll h-[90dvh]">
        {/*{reservations?.map((reservation) => (*/}
        {/*  <Card key={reservation.id} className="w-full h-fit">*/}
        {/*    <CardHeader>*/}
        {/*      <div className="flex justify-between items-center">*/}
        {/*        <CardTitle>{reservation.name}</CardTitle>*/}
        {/*      </div>*/}
        {/*      <CardDescription>Reservation #{reservation.id}</CardDescription>*/}
        {/*    </CardHeader>*/}
        {/*    <CardContent>*/}
        {/*      <div className="space-y-2">*/}
        {/*        <div className="flex items-center">*/}
        {/*          <Users className="mr-2 h-4 w-4" />*/}
        {/*          <span>*/}
        {/*            {reservation.firstname} - {reservation.lastname}*/}
        {/*          </span>*/}
        {/*        </div>*/}
        {/*        <div className="flex items-center">*/}
        {/*          <Calendar className="mr-2 h-4 w-4" />*/}
        {/*          <span>*/}
        {/*            {reservation.start} - {reservation.end}*/}
        {/*          </span>*/}
        {/*        </div>*/}
        {/*        <div className="flex items-center">*/}
        {/*          <Phone className="mr-2 h-4 w-4" />*/}
        {/*          <span>{reservation.phone}</span>*/}
        {/*        </div>*/}
        {/*        <div className="flex items-center">*/}
        {/*          <Mail className="mr-2 h-4 w-4" />*/}
        {/*          <Link*/}
        {/*            to={`mailto:${reservation.email}`}*/}
        {/*            className={'text-blue-500'}*/}
        {/*          >*/}
        {/*            {reservation.email}*/}
        {/*          </Link>*/}
        {/*        </div>*/}

        {/*        <div className="mt-2">*/}
        {/*          <strong>Description:</strong>*/}
        {/*          <p>{reservation.description}</p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </CardContent>*/}
        {/*    <CardFooter className="flex justify-end space-x-2">*/}
        {/*      {reservation.status === false && (*/}
        {/*        <>*/}
        {/*          <Button*/}
        {/*            variant="destructive"*/}
        {/*            size="sm"*/}
        {/*            onClick={() => handleDelete(reservation.id)}*/}
        {/*          >*/}
        {/*            <X className="mr-2 h-4 w-4" /> Refuser*/}
        {/*          </Button>*/}
        {/*          <Button*/}
        {/*            className="bg-green-500 hover:bg-green-600"*/}
        {/*            size="sm"*/}
        {/*            onClick={() => handleUpdate(reservation.id, true)}*/}
        {/*          >*/}
        {/*            <Check className="mr-2 h-4 w-4" /> Accepter*/}
        {/*          </Button>*/}
        {/*        </>*/}
        {/*      )}*/}
        {/*    </CardFooter>*/}
        {/*  </Card>*/}
        {/*))}*/}
      </div>
    </div>
  )
}
