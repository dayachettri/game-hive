import {
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';
import { Link } from 'react-router-dom';
import GameTrailer from '../components/GameTrailer';
import GameScreenshots from '../components/GameScreenshots';

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug || '');

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Button padding={0}>
        <Link to="/" style={{ padding: '15px' }}>
          Go Back
        </Link>
      </Button>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
}

export default GameDetailPage;
