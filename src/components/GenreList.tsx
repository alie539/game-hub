import {
    Button,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { useGenres, type Genre } from "../hooks/useGenres";
import getCropedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (isLoading) return <Spinner />;
    if (error) return <Text color="red">GenresErrorMessage</Text>;

    return (
        <List>
            {data.map((genres) => (
                <ListItem key={genres.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCropedImageUrl(genres.image_background)}
                        />
                        <Button
                            onClick={() => onSelectGenre(genres)}
                            fontSize="lg"
                            variant="link"
                        >
                            {genres.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
