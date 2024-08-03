import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import Video from "next-video";
import localFont from "@next/font/local";
import styles from "../styles/page.module.css";
import "flag-icons";

const heading = localFont({ src: "../../public/fonts/against-regular.otf" });
const bodyRegular = localFont({
  src: "../../public/fonts/Satoshi-Regular.otf",
});
const bodyMedium = localFont({ src: "../../public/fonts/Satoshi-Medium.otf" });
const bodyBold = localFont({ src: "../../public/fonts/Satoshi-Bold.otf" });

export default function Home() {
  return (
    <Box
      className={heading.className}
      background="black"
      minH="100vh"
      minW="100vw"
      overflow="auto"
      position="relative"
      zIndex={2}
    >
      <Box position="absolute" zIndex={0} w="100%" minH={"100vh"}>
        <Video
          src={"/assets/background.mp4"}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className={styles.video}
        ></Video>
      </Box>
      <Flex
        position="relative"
        zIndex={2}
        justifyItems="center"
        alignItems={"center"}
        justify="center"
        direction="column"
      >
        <Box position={"absolute"} top={0} zIndex={1}>
          <Image
            src="/assets/glow.svg"
            height="250"
            width="250"
            alt="ETHAntwerp"
          />
        </Box>
        <Flex
          zIndex={2}
          mt="16"
          direction={"column"}
          justify="center"
          alignItems="center"
        >
          <Image
            src="/assets/logo.svg"
            height={{ base: "20", md: "100" }}
            width={{ base: "20", md: "100" }}
            alt="ETHAntwerp"
          />
          <Text color="white" mt="2">
            ETHAntwerp
          </Text>
          <Image
            mt="6"
            src="/assets/star.svg"
            height="6"
            width="6"
            alt="ETHAntwerp"
          />
          <Text
            color="white"
            mt="6"
            fontSize={{ base: "3xl", md: "4xl" }}
            px={{ base: "10", md: 0 }}
            align="center"
          >
            Belgium{`'`}s own ETH movement is here!
          </Text>

          <Text
            className={bodyRegular.className}
            color="white"
            mt="2"
            opacity={0.6}
            fontSize={{ base: "sm", md: "md" }}
            px={{ base: "12", md: 0 }}
            align="center"
          >
            Join the coolest web3 community in{" "}
            <span className="fi fi-be"></span>. No clichés, just real
            connections.
          </Text>
          <Button
            rounded="full"
            _hover={{ transform: "scale(1.06)" }}
            _focus={{}}
            _active={{ transform: "scale(0.9)" }}
            color="white"
            backdropFilter={"blur(3px)"}
            boxShadow={"0px 0px 30px 2px rgb(255,255,255,0.5)"}
            mt="10"
            className={bodyBold.className}
            bgColor="transparent"
            pr="2"
            pl="6"
            pb="7"
            pt="7"
            role="group"
            bgGradient="linear(to-r, #FFE8DBB3 0%, #E7CEFFB3 100%)"
            rightIcon={
              <Image
                _groupHover={{ transform: "rotate(45deg)" }}
                transitionDuration={"200ms"}
                src="/assets/link.svg"
                height="10"
                width="10"
                alt="ETHAntwerp"
              />
            }
          >
            Get the Early Supporter NFT
          </Button>
          <Flex gap="5" mt="3">
            <Link
              opacity={0.7}
              color="white"
              className={bodyMedium.className}
              textDecoration="underline"
            >
              Companies
            </Link>
            <Text opacity={0.7} color="white" className={bodyRegular.className}>
              |
            </Text>
            <Link
              opacity={0.7}
              color="white"
              className={bodyMedium.className}
              textDecoration="underline"
            >
              Volunteers
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="5"
        mt="24"
        position="absolute"
        bottom={10}
        justifyItems="center"
        justify="center"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Link color="white" className={bodyMedium.className}>
          <Image
            src="/assets/twitter.svg"
            height="10"
            width="10"
            alt="ETHAntwerp | Twitter"
          />
        </Link>

        <Link color="white" className={bodyMedium.className}>
          <Image
            src="/assets/telegram.svg"
            height="10"
            width="10"
            alt="ETHAntwerp | Telegram"
          />
        </Link>
        <Link color="white" className={bodyMedium.className}>
          <Image
            src="/assets/linkedin.svg"
            height="10"
            width="10"
            alt="ETHAntwerp | LinkedIn"
          />
        </Link>
      </Flex>
    </Box>
  );
}
