import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  return (
    <Badge
      fontSize="14px"
      px="8px"
      borderRadius="4px"
      colorScheme={score >= 90 ? "green" : score <= 50 ? "red" : "orange"}
    >
      {score}
    </Badge>
  );
};
export default CriticScore;
