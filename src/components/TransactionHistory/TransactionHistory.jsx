import { Box } from '../Box';
import PropTypes from 'prop-types';
import { TransCell, TransTr, TransTrHead } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Box as="table" width="450px" border="1px solid #e1e3e5" mb="35px">
      <thead>
        <TransTrHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransTrHead>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransTr key={id}>
            <TransCell>{type}</TransCell>
            <TransCell>{amount}</TransCell>
            <TransCell>{currency}</TransCell>
          </TransTr>
        ))}
      </tbody>
    </Box>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};