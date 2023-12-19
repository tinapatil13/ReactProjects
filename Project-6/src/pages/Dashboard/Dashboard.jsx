import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import Portfolio from "./Components/Portfolio";
import PriceSection from "./Components/PriceSection";
import Transaction from "./Components/Transaction";
import InfoCard from "../Dashboard/components/InfoCard";

const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
      gridTemplateColumns
      ={
       {
        base:"repeat(1, 1fr)",
        md:"repeat(2, 1fr)"
       }
      } 
      gap="6"
      >
        <GridItem colSpan={{base:1, lg:2}}>
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard 
          imgUrl="/dot_bg.svg"
          text="Learn more about Loans – Keep your Bitcoin, access it’s 
          value without selling it"
          tagText="Loan"
          inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard 
          imgUrl="/grid_bg.svg"
          text="Learn more about our real estate, 
          mortgage, and  corporate account services"
          tagText="Contact"
          inverted={true}
           />
        </GridItem>
      </Grid>
      
    </DashboardLayout>
  );
};

export default Dashboard;
