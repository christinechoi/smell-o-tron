import React from 'react';
import { Card, Button, Image, Divider, Sticky } from 'semantic-ui-react';

const SelectedPerfumes = (props) => {


  return (
    <div className='selected Perfumes' > {
      <Sticky >
      <Card.Group className='ui eight column doubling stackable grid container centered'> {
        props.selectedPerfumes.map((perfume, index) => (  

          <Card centered>
            <Card.Content>
              <Image src={perfume.pictureURL} size='medium' /> //padding
              <Card.Header>
                {perfume.name} 
              </Card.Header> 
              <Card.Description>
                by {perfume.brand}
              </Card.Description>
              <Card.Meta>
                meta stuff
              </Card.Meta>
              <Card.Content extra>
                <div className='ui buttons'>
                  <Button 
                    onClick={props.removeOnClick.bind(this, perfume)}
                    basic color='red'> Remove 
                  </Button> //stick to bottom of Card
                </div>
              </Card.Content>
            </Card.Content>
          </Card>
        ))}

      </Card.Group>
      </Sticky>
    }
    <Divider></Divider>
    
    <Sticky >
    <Button 
      size='big' 
      color='blue' 
      onClick={props.handleClick.bind(this, props.selectedPerfumes.map(item => item.id))} > 
        Get Recommendation! 
    </Button>
    </Sticky >

    </div>
  );
};

export default SelectedPerfumes;
