import {  Grid, styled } from '@mui/material';

const ImageURL = [
    'banners/banner1.jpg',
    'banners/banner2.jpg',
    'banners/banner3.jpg'
];

const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;

const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 1,
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
                {
                    ImageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} style={{ width: '100%', height:"90%" }} alt='img'/>
                        </Grid>
                    ))
                }
            </Wrapper>
            <Image src={url} />
        </>
    )
}

export default MidSection;