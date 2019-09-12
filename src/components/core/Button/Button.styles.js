import { makeStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

export default makeStyles(
  theme => ({
    /* Styles applied to the root element. */
    root: {
      ...theme.typography.button,
      boxSizing: "border-box",
      minWidth: 64,
      padding: "6px 16px",
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(
        ["background-color", "box-shadow", "border"],
        {
          duration: theme.transitions.duration.short
        }
      ),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: fade(
          theme.palette.text.primary,
          theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        },
        "&$disabled": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        color: theme.palette.action.disabled
      }
    },

    /* NOTE: these are the overriden extra classes for the text alignment*/
    textAlignLeft: {
      justifyContent: "left"
    },
    textAlignRight: {
      justifyContent: "right"
    },
    textAlignCenter: {
      justifyContent: "center"
    }
  }),
  { name: "HSButton" }
);
