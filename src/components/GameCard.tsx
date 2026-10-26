import {
    FaWindows,
    FaXbox,
    FaPlaystation,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <PlatFormIconList
                    key={game.id}
                    platforms={game.parent_platforms.map((p) => p.platform)}
                />
            </CardBody>
        </Card>
    );
};

export default GameCard;
