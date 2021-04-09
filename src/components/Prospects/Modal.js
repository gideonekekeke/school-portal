import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "antd";
import "./mod.css";
import { motion } from "framer-motion";
function DetailScreen({ bg, tt, img, back }) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      backgroundColor: back,
      // border: "2px solid #000",
      backgroundImage: "linear-gradient(#4c87df, #1854b1, #2233ac)",

      color: "white",

      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "50%",
      height: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          marginTop: "5px",
          height: "40px",
          width: "100px",
          backgroundColor: "#FD7F00",
          color: "white",

          border: "none",
          fontWeight: "bold",
        }}
      >
        Learn More
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            className={classes.paper}
          >
            <div className="modal_card" style={{ backgroundColor: bg }}>
              <div
                className="modal_image"
                style={{ height: "60%", width: "50%", borderRadius: "100px" }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "100px",
                  }}
                  src={img}
                />
              </div>
            </div>
            <div className="content_page">
              <h3>{tt}</h3>
              <div className="content_text">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </motion.div>
        </Fade>
      </Modal>
    </div>
  );
}

export default DetailScreen;
