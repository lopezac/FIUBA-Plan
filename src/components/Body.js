import { AddIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  IconButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import "moment/locale/es";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DataContext } from "../Context";
import useWindowSize from "../utils/useWindowSize";
import Calendar from "./Calendar";
import MateriasDrawer from "./MateriasDrawer";

const Body = () => {
  const { events, data } = React.useContext(DataContext);
  const [useAgenda, setUseAgenda] = React.useState(false);
  const { width } = useWindowSize();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const toast = useToast();

  React.useEffect(() => {
    toast({
      position: "bottom",
      duration: 2000,
      render: () => (
        <Alert
          borderColor="black"
          borderWidth={2}
          borderRadius={5}
          mx={10}
          mb={8}
          status="success"
        >
          <AlertIcon />
          Actualizado al {data.cuatrimestre}
        </Alert>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setUseAgenda(width < 1000);
  }, [width]);

  return (
    <Box flexGrow={1}>
      <MateriasDrawer
        isOpen={isOpen}
        onClose={onClose}
        useAgenda={useAgenda}
        setUseAgenda={setUseAgenda}
      />
      <Calendar events={events} useAgenda={useAgenda} />
      <IconButton
        position="absolute"
        right={10}
        bottom={10}
        m={10}
        icon={<AddIcon />}
        onClick={onToggle}
        colorScheme="primary"
        aria-label="Agregar Materia"
        color="background"
        borderColor="background"
        fontFamily="general"
      />
    </Box>
  );
};

export default Body;
