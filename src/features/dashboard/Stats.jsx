import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineChartBar } from 'react-icons/hi';
import Stat from './Stat';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // Calculate stats
  //bookings
  const numBookings = bookings?.length;

  //sales
  const sales = bookings?.reduce((acc, booking) => acc + booking.totalPrice, 0);

  //checkins
  const checkins = confirmedStays?.length;

  //occupancyRate
  const occupation = confirmedStays?.reduce((acc, stay) => acc + stay.numNights, 0) / (numDays * cabinCount);
  return (
    <>
      <Stat title="Bookings" color="blue" icon={<HiOutlineBriefcase />} value={numBookings} />
      <Stat title="Sales" color="green" icon={<HiOutlineBanknotes />} value={formatCurrency(sales)} />
      <Stat title="Check-ins" color="indigo" icon={<HiOutlineCalendar />} value={checkins} />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + '%'}
      />
    </>
  );
}

export default Stats;
