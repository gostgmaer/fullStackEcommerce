// import { ArrayData } from "@/assets/mock/product";
// import { AddAPhoto, NoteAdd, AddAlert } from "@mui/icons-material";
// import { Step, StepLabel, Stepper } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import clsx from "clsx";

// function App() {
//   const useStyles = makeStyles(() => ({
//     root: {
//       backgroundColor: "#eaeaf0",
//       padding: 8,
//       borderRadius: "50%",
//     },
//     active: {
//       color: "red",
//     },
//     completed: {
//       color: "green",
//     },
//   }));

//   const CustomStepIcon = (props) => {
//     const classes = useStyles();
//     const { active, completed } = props;

//     const stepIcons = {
//       1: <NoteAdd />,
//       2: <AddAPhoto />,
//       3: <AddAlert />,
//     };

//     return (
//       <div
//         className={clsx(classes.root, {
//           [classes.active]: active,
//           [classes.completed]: completed,
//         })}
//       >
//         {stepIcons[String(props.icon)]}
//       </div>
//     );
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//     <Stepper activeStep={1} alternativeLabel>
//       {steps.map((label) => (
//         <Step key={label}>
//           <StepLabel>{label}</StepLabel>
//         </Step>
//       ))}
//     </Stepper>
//   </Box>
//   );
// }

// export default App;
