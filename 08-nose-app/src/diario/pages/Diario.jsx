import { IconButton, Typography } from '@mui/material';
import { AddOutlined, WhatsApp } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';



export const Diario = () => {
  return (
    <>
    <JournalLayout>
        {/* <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore quo ducimus veniam sed fugit veritatis ipsa, voluptates qui id similique harum, minima porro aut consectetur, animi natus laboriosam temporibus!
        </Typography> */}

        <NothingSelectedView/>
        {/* <NoteView/> */}

        <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'terceary.main',
            ':hover': { backgroundColor: 'terceary.main', opacity: 0.9},
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
          >
            
            <WhatsApp sx={{fontzise: 30}}/>
        </IconButton>

    </JournalLayout>

      

    </>
  )
}
