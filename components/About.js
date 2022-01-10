import { Text, Box, HStack, IconButton } from "@chakra-ui/react";
import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";

const SocialMediaLink = ({ href, ariaLabel, icon }) => {
  return (
    <a href={href} target={"_blank"} rel={"noreferrer"}>
      <IconButton variant="ghost" aria-label={ariaLabel} icon={icon} isRound />
    </a>
  );
};

export default function About() {
  return (
    <HStack
      justifyContent="space-between"
      color="white"
      width={"70%"}
      marginTop={"10%"}
    >
      <Text fontWeight={"bold"} fontStyle={"italic"}>
        RSourah
      </Text>
      <Text>by TawalMc</Text>
      <HStack justifyContent="space-around" color="white">
        <SocialMediaLink
          href="https://twitter.com/Tawal_Mc"
          ariaLabel={"Twitter"}
          icon={<RiTwitterLine color="#63B3ED" />}
        />
        <SocialMediaLink
          href={"https://github.com/TawalMc"}
          ariaLabel={"GitHub"}
          icon={<RiGithubLine color="black" />}
        />
        <SocialMediaLink
          href={"https://www.linkedin.com/in/tawaliou-alao-26688614b/"}
          ariaLabel={"LinkedIn"}
          icon={<RiLinkedinLine color="#63B3ED" />}
        />
      </HStack>
    </HStack>
  );
}
