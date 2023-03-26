import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img from "../Assets/21.jpeg";

const Latesttransact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Latest Tranaction</Title>
        <Table>
          <table>
            <tr>
              <th>Recepient</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Kunle</td>
              <td>10th ot March 2023</td>
              <td>₦3,500</td>
            </tr>
            <tr>
              <td>Sani</td>
              <td>18th ot March 2023</td>
              <td>₦2,600</td>
            </tr>
            <tr>
              <td>Joseph</td>
              <td>20th ot March 2023</td>
              <td>₦7,250</td>
            </tr>
            <tr>
              <td>Ovoke</td>
              <td>23rd ot March 2023</td>
              <td>₦5,800</td>
            </tr>
          </table>
        </Table>
        <BtnHold>
          <Button>View More</Button>
        </BtnHold>
      </Wrapper>
    </Container>
  );
};

export default Latesttransact;

const Container = styled.div`
  width: 93%;
  display: flex;
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  margin-top: 30px;
  flex-direction: column;
  margin-bottom: 30px;
  background-color: #fff;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Table = styled.div`
  overflow-x: auto;
  font-size: 13px;
  table {
    width: 100%;
  }
  table,
  th,
  td {
    border: 1px solid lightgray;
    border-collapse: collapse;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th,
  td {
    padding: 15px 10px;
    text-align: left;
  }
  th {
    font-size: 13px;
    background-color: #0d71fa;
    color: #fff;
  }
`;

const BtnHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  height: 35px;
  width: 150px;
  margin-top: 15px;
  font-family: poppins;
  border: 1px solid #0d71fa;
  /* color: #6d6d6e; */
  color: #0d71fa;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  /* margin-right: 10px; */
  transition: all 350ms;
  :hover {
    transform: scale(0.98);
  }
  @media (max-width: 500px) {
    height: 40px;
    width: 100px;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
