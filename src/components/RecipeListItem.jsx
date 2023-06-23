import { Button, Card } from "semantic-ui-react";

import {Link} from 'react-router-dom';  

const RecipeListItem = ({recipe}) => {
    return(
        <Card className="card-body">
            <img src={recipe.image_url} alt="thumbnail" style={{height:170}}/>
            <Card.Content>
                <Card.Header content={recipe.title} />
                <Card.Description>
                    <h4>{recipe.publisher}</h4>
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button 
                     as={Link}
                     to={`/recipes/${recipe.recipe_id}`}
                     content="Details"
                     color="black"
                     size="tiny"
                />
                <Button 
                     href={recipe.source_url}
                     target='_blank'
                     content="Recipe URL"
                     color="red"
                     size="tiny"
                />

            </Card.Content>
        </Card>
    )
}

export default RecipeListItem;