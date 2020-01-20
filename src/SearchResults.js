import React from "react";
import moment from "moment";

function getDifferenceInDays(start, end) {
  return moment(end).diff(moment(start), "days");
}

const Row = ({
  id,
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate
}) => {
  const stayLength = getDifferenceInDays(checkInDate, checkOutDate);

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{stayLength} days</td>
    </tr>
  );
};

const SearchResult = ({ results }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">roomId</th>
          <th scope="col">Check in</th>
          <th scope="col">Check out</th>
          <th scope="col">Stay Length</th>
        </tr>
      </thead>
      <tbody>
        {results.map(row => (
          <Row {...row} key={row.id} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResult;
