import { ClientInfo } from "@/stores/clientInfo";
import { LoanParams } from "@/stores/loan";
import { Body, Button, Container, Head, Heading, Html, Preview, Tailwind, Text, Img, Section, Row } from "@react-email/components";
import * as React from "react";

type SummaryProps = {
  loan: LoanParams;
  clientInfo: ClientInfo;
};

export default function Summary({ clientInfo, loan }: SummaryProps) {
  return (
    <Html>
      <Head />
      <Preview>Loan Application Summary</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans text-[#1C1C1C]">
          <Container className="mx-auto my-[40px] max-w-[450px] rounded border border-solid border-[#E8E8E8] p-[20px]">
            <Img
              src="https://i.imgur.com/R25c7HX.png"
              alt="Company Logo"
              width={40}
              height={40}
            />
            <Heading>Loan Application Summary</Heading>
            <Text>Hello {},</Text>
            <Text>Thank you for applying for a loan. Here are the details of your application</Text>
            <Section>
              <Row>Amount {}</Row>
              <Row>Interest Rate {}</Row>
              <Row>Period {}</Row>
              <Row>Monthly Payment {}</Row>
              <Row>Total Interest {}</Row>
              <Row>Total Payment {}</Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
