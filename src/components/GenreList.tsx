import {
    Button,
    Heading,
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
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (isLoading) return <Spinner />;
    if (error) return <Text color="red">GenresErrorMessage</Text>;

    return (
        <>
            <Heading fontSize={"2xl"} marginBottom={3}>
                Genre
            </Heading>
            <List>
                {data.map((genres) => (
                    <ListItem key={genres.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                objectFit={"cover"}
                                src={getCropedImageUrl(genres.image_background)}
                            />
                            <Button
                                whiteSpace={"normal"}
                                textAlign={"left"}
                                fontWeight={
                                    genres.id === selectedGenre?.id
                                        ? "bold"
                                        : "normal"
                                }
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
        </>
    );
};

export default GenreList;
