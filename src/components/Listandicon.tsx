import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

export default function Sidebar() {
  return (
    <div>
      <UnorderedList mb="50px" ml="50px">
        <ListItem>A</ListItem>
        <ListItem>A</ListItem>
        <ListItem>A</ListItem>
        <ListItem>A</ListItem>
        <ListItem>A</ListItem>
      </UnorderedList>
      <OrderedList ml="50px">
        <ListItem>
          B
          <PhoneIcon m="50px" boxSize="30px" color="purple" />
        </ListItem>
        <ListItem>B</ListItem>
        <ListItem>B</ListItem>
        <ListItem>B</ListItem>
        <ListItem>B</ListItem>
      </OrderedList>
    </div>
  );
}
