import { useState, useEffect, useCallback } from "react";
import { Dialog, IconButton, Grid, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ImageGallery({ imageList }: { imageList: string[] }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const goToPrevious = useCallback(
    () =>
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : imageList.length - 1)),
    [setCurrentIndex],
  );

  const goToNext = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % imageList.length),
    [setCurrentIndex],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, goToPrevious, goToNext, handleClose]);

  return (
    <>
      <Grid container spacing={2}>
        {imageList.map((img, index) => (
          <Grid key={index}>
            <img
              src={img}
              alt={`Image ${index}`}
              style={{
                width: 60,
                height: 60,
                objectFit: "cover",
                borderRadius: 6,
                cursor: "pointer",
                border: "0.25px solid black",
              }}
              onClick={() => handleOpen(index)}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <Box position="relative" p={2} bgcolor="black">
          <img
            src={imageList[currentIndex]}
            alt={`Preview ${currentIndex}`}
            style={{ width: "100%", maxHeight: "90vh", objectFit: "contain" }}
          />
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={goToPrevious}
            sx={{ position: "absolute", top: "50%", left: 8, color: "white" }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={goToNext}
            sx={{ position: "absolute", top: "50%", right: 8, color: "white" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Dialog>
    </>
  );
}
