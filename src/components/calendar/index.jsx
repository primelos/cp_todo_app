import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

const CalendarShow = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <p>TEST...</p>
      <Wrapper>
        <Calendar
          onChange={onChange}
          value={value}
          calendarType="Arabic"
          defaultView="year"
        />
      </Wrapper>
    </div>
  );
};

export default CalendarShow;

const Wrapper = styled.div`
  /* width: 100px; */
`;
