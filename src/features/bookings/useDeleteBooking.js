import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success('Booking successfully deleted');
      // QueryClient will automatically refetch the data
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}

// import toast from 'react-hot-toast';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { deleteCabin as deleteCabinApi } from '../../services/apiCabins';

// export function useDeleteCabin() {
//   const queryClient = useQueryClient();

//   const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
//     mutationFn: deleteCabinApi,
//     onSuccess: () => {
//       toast.success('cabin successfully deleted');
//       // QueryClient will automatically refetch the data
//       queryClient.invalidateQueries({
//         queryKey: ['cabins'],
//       });
//     },
//     onError: (err) => toast.error(err.message),
//   });

//   return { isDeleting, deleteCabin };
// }
