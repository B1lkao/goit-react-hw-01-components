import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { StatTitle, StatList, StatItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      as="section"
      bg="background"
      width="440px"
      borderRadius="5px"
      overflow="hidden"
    >
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} label={label}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Box>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};