import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { useParams } from "react-router";
import CloseIcon from "@mui/icons-material/Close";

export function AppVideo()
{
  const params = useParams();
  return (

    <Dialog
      maxWidth="lg"
      open={true}
      fullWidth={true}
      onClose={() => window.history.back()}
    >

      <DialogTitle sx={{ backgroundColor: "var(--bg-color-3)", color: "var(--text-color-2)", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "1.5rem", color: "var(--active-color)" }} > CineSphere Clips</span>
        <IconButton onClick={() => window.history.back()}>
          <CloseIcon sx={{ color: "var(--text-color-2)", "&:hover": { color: "var(--active-color)" } }}></CloseIcon>
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: "var(--bg-color-3)" }}>
        <div>
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${ params.videoId }?autoplay=1&mute=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </DialogContent>
    </Dialog>

  );
}
