import { yellow } from '@mui/material/colors';
import { PieChart } from 'react-minimal-pie-chart';

export const Statistics = () => {
  return (
    <PieChart
    className='graphic'
        data={[
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
        { title: 'Four', value: 10, color: '#C66232'}
  ]}
/>)
}




