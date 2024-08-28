// import {
//     Box,
//     Button,
//     Center,
//     Heading,
//     Image,
//     Stack,
//     Text,
//     useColorModeValue,
//   } from "@chakra-ui/react";
//   import { Link } from "react-router-dom";
//   import CommonPage from "./CommonPage";

//   const IMAGE =
//     "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
  
//   export default function HallCard(props) {
//     return (
//       <Center py={12}>
//         <Box
//           role={"group"}
//           p={6}
//           maxW={"330px"}
//           w={"full"}
//           bg={useColorModeValue("white", "gray.500")}
//           boxShadow={"xl"}
//           rounded={"lg"}
//           pos={"relative"}
//           zIndex={1}
//           _groupHover={{
//             backgroundColor: "primary.300",
//             color: "pink",
//           }}
//         >
//           <Box
//             rounded={"lg"}
//             mt={-12}
//             pos={"relative"}
//             height={"205px"}
//             _after={{
//               transition: "all .3s ease",
//               content: '""',
//               w: "full",
//               h: "full",
//               pos: "absolute",
//               top: 4,
//               left: 0,
//               // backgroundImage: `url(${props.imgsrc})`,
//               backgroundColor: "#ABABAB",
//               filter: "blur(15px)",
//               zIndex: -1,
//             }}
//             _groupHover={{
//               _after: {
//                 filter: "blur(10px)",
//               },
//             }}
//           >
//             <Image
//               rounded={"lg"}
//               height={210}
//               width={282}
//               objectFit={"cover"}
//               src={props.imgsrc}
//             />
//           </Box>
//           <Stack spacing={1} align={"center"}>
//             <Text
//               pt="8"
//               pb="2"
//               color={"gray.500"}
//               fontSize={"xs"}
//               textTransform={"uppercase"}
//             >
//               ({props.block})
//             </Text>
//             <Heading fontSize={"md"} fontFamily={"body"} fontWeight={800}>
//               {props.hall}
//             </Heading>
//             <Stack direction={"row"} align={"center"}>
//               <Text fontSize={"sm"}>Max Capacity : {props.capacity}</Text>
//             </Stack>
//           </Stack>
//           <Link
//             to="/hallbooking"
//             state={props}
//             style={{ textDecoration: "none" }}
//           >
//             <Button colorScheme="linkedin" mt="6" w="full" h="12">
//               Book now
//             </Button>
//           </Link>
//         </Box>
//       </Center>
//     );
//   }
  

// without address , price and rating

// import {
//   Box,
//   Button,
//   Center,
//   Heading,
//   Image,
//   Stack,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// export default function HallCard(props) {
//   return (
//     <Center py={12}>
//       <Box
//         role={"group"}
//         p={6}
//         maxW={"330px"}
//         w={"full"}
//         bg={useColorModeValue("white", "gray.500")}
//         boxShadow={"xl"}
//         borderRadius={"lg"} // Ensure border radius for the card container
//         overflow={"hidden"} // Ensure content stays within rounded corners
//         pos={"relative"}
//         zIndex={1}
//         _groupHover={{
//           backgroundColor: "primary.300",
//           color: "pink",
//         }}
//       >
//         <Box
//           borderRadius={"lg"} // Border radius for the blurred background
//           mt={-12}
//           pos={"relative"}
//           height={"205px"}
//           overflow={"hidden"} // Ensure blurred background fits within rounded corners
//           _after={{
//             transition: "all .3s ease",
//             content: '""',
//             w: "full",
//             h: "full",
//             pos: "absolute",
//             top: 4,
//             left: 0,
//             backgroundImage: `url(${props.imgsrc})`,
//             backgroundColor: "#ABABAB",
//             filter: "blur(15px)",
//             zIndex: -1,
//             borderRadius: "lg", // Ensure blur effect matches card’s corners
//           }}
//           _groupHover={{
//             _after: {
//               filter: "blur(10px)",
//             },
//           }}
//         >
//           <Image
//             borderRadius={"lg"} // Border radius for the image
//             height={210}
//             width={282}
//             objectFit={"cover"}
//             src={props.imgsrc}
//           />
//         </Box>
//         <Stack spacing={1} align={"center"}>
//           <Text
//             pt="8"
//             pb="2"
//             color={"gray.500"}
//             fontSize={"xs"}
//             textTransform={"uppercase"}
//           >
//             ({props.block})
//           </Text>
//           <Heading fontSize={"md"} fontFamily={"body"} fontWeight={800}>
//             {props.hall}
//           </Heading>
//           <Stack direction={"row"} align={"center"}>
//             <Text fontSize={"sm"}>Max Capacity: {props.capacity}</Text>
//           </Stack>
//         </Stack>
//         <Link
//           to="/hallbooking"
//           state={props}
//           style={{ textDecoration: "none" }}
//         >
//           {/* <Button colorScheme="linkedin" mt="6" w="full" h="12">
//             Book now
//           </Button> */}
//           <Button
//               sx={{
//                 bg: "#0077b6",
//                 color: "white",
//                 borderRadius: "md",
//                 p: "8px 16px",
//                 fontWeight: "bold",
//                 boxShadow: "md",
//                 transition: "background-color 0.3s ease",
//                 _hover: { bg: "#005f73" },
//               }}
//             >
//               Book now
//           </Button>
//         </Link>
//       </Box>
//     </Center>
//   );
// }


// import {
//   Box,
//   Button,
//   Center,
//   Heading,
//   Image,
//   Stack,
//   Text,
//   useColorModeValue,
//   HStack,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { StarIcon } from "@chakra-ui/icons"; // For star rating icons

// export default function HallCard(props) {
//   return (
//     <Center py={12}>
//       <Box
//         role={"group"}
//         p={6}
//         maxW={"330px"}
//         w={"full"}
//         bg={useColorModeValue("white", "gray.500")}
//         boxShadow={"xl"}
//         borderRadius={"lg"}
//         overflow={"hidden"}
//         pos={"relative"}
//         zIndex={1}
//         _groupHover={{
//           backgroundColor: "primary.300",
//           color: "pink",
//         }}
//       >
//         <Box
//           borderRadius={"lg"}
//           mt={-12}
//           pos={"relative"}
//           height={"205px"}
//           overflow={"hidden"}
//           _after={{
//             transition: "all .3s ease",
//             content: '""',
//             w: "full",
//             h: "full",
//             pos: "absolute",
//             top: 4,
//             left: 0,
//             backgroundImage: `url(${props.imgsrc})`,
//             backgroundColor: "#ABABAB",
//             filter: "blur(15px)",
//             zIndex: -1,
//             borderRadius: "lg",
//           }}
//           _groupHover={{
//             _after: {
//               filter: "blur(10px)",
//             },
//           }}
//         >
//           <Image
//             borderRadius={"lg"}
//             height={210}
//             width={282}
//             objectFit={"cover"}
//             src={props.imgsrc}
//           />
//         </Box>
//         <Stack spacing={1} align={"center"}>
//           <Text
//             pt="8"
//             pb="2"
//             color={"gray.500"}
//             fontSize={"xs"}
//             textTransform={"uppercase"}
//           >
//             ({props.block})
//           </Text>
//           <Heading fontSize={"md"} fontFamily={"body"} fontWeight={800}>
//             {props.hall}
//           </Heading>
//           <Text fontSize={"sm"} color={"gray.700"} textAlign="center">Address: {props.address}
//           </Text>
//           <Stack direction={"row"} align={"center"}>
//             <Text fontSize={"sm"}>Max Capacity: {props.capacity}</Text>
//           </Stack>
//           <Text fontSize={"sm"} color={"gray.500"}>
//             Price: ₹{props.price} per/hr
//             {/* {props.hr ? "hour" : "event"} */}
//           </Text>
//           <HStack spacing={1} mt={2}>
//             {Array(5)
//               .fill("")
//               .map((_, i) => (
//                 <StarIcon
//                   key={i}
//                   color={i < props.rating ? "yellow.500" : "gray.300"}
//                 />
//               ))}
//             <Text fontSize={"sm"} color={"gray.500"}>
//               {props.rating} stars
//             </Text>
//           </HStack>
//         </Stack>
//         <Link
//           to="/hallbooking"
//           state={props}
//           style={{ textDecoration: "none" }}
//         >
//           <Button
//             sx={{
//               bg: "#0077b6",
//               color: "white",
//               borderRadius: "md",
//               p: "8px 16px",
//               fontWeight: "bold",
//               boxShadow: "md",
//               transition: "background-color 0.3s ease",
//               _hover: { bg: "#005f73" },
//               mt: 4,
//               w: "full",
//             }}
//           >
//             Book now
//           </Button>
//         </Link>
//       </Box>
//     </Center>
//   );
// }


// import {
//   Box,
//   Button,
//   Center,
//   Heading,
//   Image,
//   Stack,
//   Text,
//   useColorModeValue,
//   HStack,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { StarIcon } from "@chakra-ui/icons";

// export default function HallCard(props) {
//   return (
//     <Center py={12}>
//       <Box
//         role={"group"}
//         p={6}
//         maxW={"330px"}
//         w={"full"}
//         bg={useColorModeValue("white", "gray.500")}
//         boxShadow={"xl"}
//         borderRadius={"lg"}
//         overflow={"hidden"}
//         pos={"relative"}
//         zIndex={1}
//         _groupHover={{
//           backgroundColor: "primary.300",
//           color: "pink",
//         }}
//       >
//         <Box
//           borderRadius={"lg"}
//           mt={-12}
//           pos={"relative"}
//           height={"205px"}
//           overflow={"hidden"}
//           _after={{
//             transition: "all .3s ease",
//             content: '""',
//             w: "full",
//             h: "full",
//             pos: "absolute",
//             top: 4,
//             left: 0,
//             backgroundImage: `url(${props.imgsrc})`,
//             backgroundColor: "#ABABAB",
//             filter: "blur(15px)",
//             zIndex: -1,
//             borderRadius: "lg",
//           }}
//           _groupHover={{
//             _after: {
//               filter: "blur(10px)",
//             },
//           }}
//         >
//           <Image
//             borderRadius={"lg"}
//             height={210}
//             width={282}
//             objectFit={"cover"}
//             src={props.imgsrc}
//           />
//         </Box>
//         <Stack spacing={1} align={"center"}>
//           <Text
//             pt="8"
//             pb="2"
//             color={"gray.500"}
//             fontSize={"xs"}
//             textTransform={"uppercase"}
//           >
//             ({props.block})
//           </Text>
//           <Heading fontSize={"md"} fontFamily={"body"} fontWeight={800}>
//             {props.hall}
//           </Heading>
//           <Text fontSize={"sm"} color={"gray.700"} textAlign="center">
//             Address: {props.address}
//           </Text>
//           <Stack direction={"row"} align={"center"}>
//             <Text fontSize={"sm"}>Max Capacity: {props.capacity}</Text>
//           </Stack>
//           <Text fontSize={"sm"} color={"gray.500"}>
//             Price: ₹{props.price}/hr
//           </Text>
//           <HStack spacing={1} mt={2} alignItems="center">
//             {Array(5)
//               .fill("")
//               .map((_, i) => (
//                 <StarIcon
//                 key={i}
//                 color={i < props.rating ? "yellow.500" : "gray.300"}
//                 fontSize="lg"
//                 style={{ color: i < props.rating ? "#FFD700" : "gray" }} // Debugging line
//               />              
//               ))}
//             <Text fontSize={"sm"} color={"gray.600"} marginTop="0.9rem">
//               {props.rating}
//             </Text>
//           </HStack>
//         </Stack>
//         <Link
//           to="/hallbooking"
//           state={props}
//           style={{ textDecoration: "none" }}
//         >
//           <Button
//             sx={{
//               bg: "#0077b6",
//               color: "white",
//               borderRadius: "md",
//               p: "8px 16px",
//               fontWeight: "bold",
//               boxShadow: "md",
//               transition: "background-color 0.3s ease",
//               _hover: { bg: "#005f73" },
//               mt: 4,
//               w: "full",
//             }}
//           >
//             Book now
//           </Button>
//         </Link>
//       </Box>
//     </Center>
//   );
// }

// import {
//   Box,
//   Button,
//   Center,
//   Heading,
//   Image,
//   Stack,
//   Text,
//   useColorModeValue,
//   HStack,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { StarIcon } from "@chakra-ui/icons";

// export default function HallCard(props) {
//   // Helper function to generate the star icons based on rating
//   const renderStars = () => {
//     const totalStars = 5;
//     const filledStars = Math.floor(props.rating);
//     const halfStar = props.rating % 1 >= 0.5;
//     const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0);

//     return (
//       <>
//         {Array(filledStars)
//           .fill("")
//           .map((_, i) => (
//             <StarIcon
//               key={`filled-${i}`}
//               color="#FFD700" // Yellow color code
//               fontSize="lg"
//             />
//           ))}
//         {halfStar && (
//           <StarIcon
//             key="half"
//             color="#FFD700" // Yellow color code
//             fontSize="lg"
//             style={{ clipPath: "inset(0 50% 0 0)" }} // Clip to show half
//           />
//         )}
//         {Array(emptyStars)
//           .fill("")
//           .map((_, i) => (
//             <StarIcon
//               key={`empty-${i}`}
//               color="#D3D3D3" // Light gray color code
//               fontSize="lg"
//             />
//           ))}
//       </>
//     );
//   };

//   return (
//     <Center py={12}>
//       <Box
//         role={"group"}
//         p={6}
//         maxW={"330px"}
//         w={"full"}
//         bg={useColorModeValue("white", "gray.500")}
//         boxShadow={"xl"}
//         borderRadius={"lg"}
//         overflow={"hidden"}
//         pos={"relative"}
//         zIndex={1}
//         _groupHover={{
//           backgroundColor: "primary.300",
//           color: "pink",
//         }}
//       >
//         <Box
//           borderRadius={"lg"}
//           mt={-12}
//           pos={"relative"}
//           height={"205px"}
//           overflow={"hidden"}
//           _after={{
//             transition: "all .3s ease",
//             content: '""',
//             w: "full",
//             h: "full",
//             pos: "absolute",
//             top: 4,
//             left: 0,
//             backgroundImage: `url(${props.imgsrc})`,
//             backgroundColor: "#ABABAB",
//             filter: "blur(15px)",
//             zIndex: -1,
//             borderRadius: "lg",
//           }}
//           _groupHover={{
//             _after: {
//               filter: "blur(10px)",
//             },
//           }}
//         >
//           <Image
//             borderRadius={"lg"}
//             height={210}
//             width={282}
//             objectFit={"cover"}
//             src={props.imgsrc}
//           />
//         </Box>
//         <Stack spacing={1} align={"center"}>
//           <Text
//             pt="8"
//             pb="2"
//             color={"gray.500"}
//             fontSize={"xs"}
//             textTransform={"uppercase"}
//           >
//             ({props.block})
//           </Text>
//           <Heading fontSize={"md"} fontFamily={"body"} fontWeight={800}>
//             {props.hall}
//           </Heading>
//           <Text fontSize={"sm"} color={"gray.700"} textAlign="center">
//             Address: {props.address}
//           </Text>
//           <Stack direction={"row"} align={"center"}>
//             <Text fontSize={"sm"}>Max Capacity: {props.capacity}</Text>
//           </Stack>
//           <Text fontSize={"sm"} color={"gray.500"}>
//             Price: ₹{props.price}/hr
//           </Text>
//           <HStack spacing={1} mt={2} alignItems="center">
//             {renderStars()}
//             <Text fontSize={"sm"} color={"gray.600"} marginTop="0.9rem">
//               {props.rating}
//             </Text>
//           </HStack>
//         </Stack>
//         <Link
//           to="/hallbooking"
//           state={props}
//           style={{ textDecoration: "none" }}
//         >
//           <Button
//             sx={{
//               bg: "#0077b6",
//               color: "white",
//               borderRadius: "md",
//               p: "8px 16px",
//               fontWeight: "bold",
//               boxShadow: "md",
//               transition: "background-color 0.3s ease",
//               _hover: { bg: "#005f73" },
//               mt: 4,
//               w: "full",
//             }}
//           >
//             Book now
//           </Button>
//         </Link>
//       </Box>
//     </Center>
//   );
// }

// current code ...
// import {
//   Box,
//   Button,
//   Center,
//   Heading,
//   Image,
//   Stack,
//   Text,
//   useColorModeValue,
//   HStack,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { StarIcon } from "@chakra-ui/icons";

// export default function HallCard(props) {
//   // Validate and sanitize the rating prop
//   const rating = typeof props.rating === 'number' ? Math.max(0, Math.min(5, props.rating)) : 0;

//   // Helper function to generate the star icons based on rating
//   const renderStars = () => {
//     const totalStars = 5;
//     const filledStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0);

//     return (
//       <>
//         {Array(filledStars)
//           .fill("")
//           .map((_, i) => (
//             <StarIcon
//               key={`filled-${i}`}
//               color="#FFD700" // Yellow color code
//               fontSize="lg"
//             />
//           ))}
//         {halfStar && (
//           <StarIcon
//             key="half"
//             color="#FFD700" // Yellow color code
//             fontSize="lg"
//             style={{ clipPath: "inset(0 50% 0 0)" }} // Clip to show half
//           />
//         )}
//         {Array(emptyStars)
//           .fill("")
//           .map((_, i) => (
//             <StarIcon
//               key={`empty-${i}`}
//               color="#D3D3D3" // Light gray color code
//               fontSize="lg"
//             />
//           ))}
//       </>
//     );
//   };

//   return (
//     <Center py={12}>
//       <Box
//         role={"group"}
//         p={6}
//         maxW={"330px"}
//         w={"full"}
//         bg={useColorModeValue("white", "gray.500")}
//         boxShadow={"xl"}
//         borderRadius={"lg"}
//         overflow={"hidden"}
//         pos={"relative"}
//         zIndex={1}
//         _groupHover={{
//           backgroundColor: "primary.300",
//           color: "pink",
//         }}
//       >
//         <Box
//           borderRadius={"lg"}
//           mt={-12}
//           pos={"relative"}
//           height={"205px"}
//           overflow={"hidden"}
//           _after={{
//             transition: "all .3s ease",
//             content: '""',
//             w: "full",
//             h: "full",
//             pos: "absolute",
//             top: 4,
//             left: 0,
//             backgroundImage: `url(${props.imgsrc})`,
//             backgroundColor: "#ABABAB",
//             filter: "blur(15px)",
//             zIndex: -1,
//             borderRadius: "lg",
//           }}
//           _groupHover={{
//             _after: {
//               filter: "blur(10px)",
//             },
//           }}
//         >
//           <Image
//             borderRadius={"lg"}
//             height={210}
//             width={282}
//             objectFit={"cover"}
//             src={props.imgsrc}
//             alt={props.hall} // Add alt attribute for accessibility
//           />
//         </Box>
//         <Stack spacing={1} align={"center"}>
//           <Text
//             pt="8"
//             pb="2"
//             color={"gray.500"}
//             fontSize={"xs"}
//             textTransform={"uppercase"}
//           >
//             ({props.block})
//           </Text>
//           <Heading fontSize={"md"} fontFamily={"body"} fontWeight={800}>
//             {props.hall}
//           </Heading>
//           <Text fontSize={"sm"} color={"gray.700"} textAlign="center">
//             Address: {props.address}
//           </Text>
//           <Stack direction={"row"} align={"center"}>
//             <Text fontSize={"sm"}>Max Capacity: {props.capacity}</Text>
//           </Stack>
//           <Text fontSize={"sm"} color={"gray.500"}>
//             Price: ₹{props.price}/hr
//           </Text>
//           <HStack spacing={1} mt={2} alignItems="center">
//             {renderStars()}
//             <Text fontSize={"sm"} color={"gray.600"} marginTop="0.9rem">
//               {rating} {/* Use validated rating */}
//             </Text>
//           </HStack>
//         </Stack>
//         <Link
//           to="/hallbooking"
//           state={props}
//           style={{ textDecoration: "none" }}
//         >
//           <Button
//             sx={{
//               bg: "#0077b6",
//               color: "white",
//               borderRadius: "md",
//               p: "8px 16px",
//               fontWeight: "bold",
//               boxShadow: "md",
//               transition: "background-color 0.3s ease",
//               _hover: { bg: "#005f73" },
//               mt: 4,
//               w: "full",
//             }}
//           >
//             Book now
//           </Button>
//         </Link>
//       </Box>
//     </Center>
//   );
// }


import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

export default function HallCard(props) {
  // Validate and sanitize the rating prop
  const rating = typeof props.rating === 'number' ? Math.max(0, Math.min(5, props.rating)) : 0;

  // Helper function to generate the star icons based on rating
  const renderStars = () => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(filledStars)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={`filled-${i}`}
              color="#FFD700" // Yellow color code
              fontSize="lg"
            />
          ))}
        {halfStar && (
          <StarIcon
            key="half"
            color="#FFD700" // Yellow color code
            fontSize="lg"
            style={{ clipPath: "inset(0 50% 0 0)" }} // Clip to show half
          />
        )}
        {Array(emptyStars)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={`empty-${i}`}
              color="#D3D3D3" // Light gray color code
              fontSize="lg"
            />
          ))}
      </>
    );
  };

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.500")}
        boxShadow={"xl"}
        borderRadius={"lg"}
        overflow={"hidden"}
        pos={"relative"}
        zIndex={1}
        _groupHover={{
          backgroundColor: "primary.300",
          color: "pink",
        }}
      >
        <Box
          borderRadius={"lg"}
          mt={-12}
          pos={"relative"}
          height={"205px"}
          overflow={"hidden"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 4,
            left: 0,
            backgroundImage: `url(${props.imgsrc})`,
            backgroundColor: "#ABABAB",
            filter: "blur(15px)",
            zIndex: -1,
            borderRadius: "lg",
          }}
          _groupHover={{
            _after: {
              filter: "blur(10px)",
            },
          }}
        >
          <Image
            borderRadius={"lg"}
            height={210}
            width={282}
            objectFit={"cover"}
            src={props.imgsrc}
            alt={props.hall || "Hall Image"} // Add alt attribute for accessibility
          />
        </Box>
        <Stack spacing={1} align={"center"}>
          <Text
            pt="8"
            pb="2"
            color={"gray.500"}
            fontSize={"xs"}
            textTransform={"uppercase"}
          >
            ({props.block || "Unknown Block"})
          </Text>
          <Heading fontSize={"md"} fontFamily={"body"} fontWeight={800}>
            {props.hall || "Unnamed Hall"}
          </Heading>
          <Text fontSize={"sm"} color={"gray.700"} textAlign="center">
            Address: {props.address || "No Address Provided"}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Text fontSize={"sm"}>Max Capacity: {props.capacity || "N/A"}</Text>
          </Stack>
          <Text fontSize={"sm"} color={"gray.500"}>
            Price: ₹{props.price || "N/A"}/hr
          </Text>
          <HStack spacing={1} mt={2} alignItems="center">
            {renderStars()}
            <Text fontSize={"sm"} color={"gray.600"} marginTop="0.9rem">
              {rating} {/* Use validated rating */}
            </Text>
          </HStack>
        </Stack>
        <Link
          to="/hallbooking"
          state={props}
          style={{ textDecoration: "none" }}
        >
          <Button
            sx={{
              bg: "#0077b6",
              color: "white",
              borderRadius: "md",
              p: "8px 16px",
              fontWeight: "bold",
              boxShadow: "md",
              transition: "background-color 0.3s ease",
              _hover: { bg: "#005f73" },
              mt: 4,
              w: "full",
            }}
          >
            Book now
          </Button>
        </Link>
      </Box>
    </Center>
  );
}
