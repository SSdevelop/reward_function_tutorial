import { Box, Typography } from "@mui/material";
import React from "react";
import video from "../../assets/videos/tut1_step1.mov";

const Step1 = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", padding: 1 }}>
      <Typography variant="h6" component="h6" paragraph gutterBottom>
        In this tutorial we will lean about creating a reward function using two
        simple variables. <br />
        We will use the reward function to train a model to drive a car on a
        track. We will then use the trained model to drive the car on the track.
        We will also learn how to use AWS to train the model. <br />A reward
        function tells the reinforcement learning algorithm how good or bad a
        particular action is. Consider it like training your pet. If you pet
        behaves, give it a treat. If it doesn't, don't give it a treat. <br />
        A reward function return values between 0 and 1. 0 means the action is
        bad and 1 means the action is good. <br />
        <br />
        Before we learn about this reward function, let us set up our code. by
        following these<i>basic steps:</i>
        <ul>
          <li>
            <i>Declare the variables you will use in the reward function.</i>
            <br />
            <p>
              Even though not always required, it is a good practice to always
              declare the variables you will use. In the code it is a statement
              like: <br />
              <code
                style={{
                  backgroundColor: "#f0ead6",
                  borderRadius: "10%",
                  padding: "10px",
                  margin: "5px",
                }}
              >
                var x = 0;
              </code>
              <br />
              Here, we are declaring a variable{" "}
              <span
                style={{
                  backgroundColor: "#f0ead6",
                  borderRadius: "10%",
                  padding: "10px",
                }}
              >
                x
              </span>
              and setting its value to 0. We can later utilize it, change it, or
              even display it. <br />
              For this tutorial, we are going to use two variables:
              <span
                style={{
                  backgroundColor: "#f0ead6",
                  borderRadius: "10%",
                  padding: "2px",
                }}
              >
                reward
              </span>
              ,
              <span
                style={{
                  backgroundColor: "#f0ead6",
                  borderRadius: "10%",
                  padding: "2px",
                }}
              >
                speed
              </span>
              , and
              <span
                style={{
                  backgroundColor: "#f0ead6",
                  borderRadius: "10%",
                  padding: "2px",
                }}
              >
                all_wheels_on_track
              </span>
            </p>
            We will talk about them in detail in further steps.
          </li>
          <li>
            Check if these variables are declared properly by clicking on Show
            Code button.
          </li>
        </ul>
        You can do this by selecting the selecting the <b>Reward</b> section for
        reward function, and using the <b>Initializers</b> section to declare
        rest of the two variables.
        <br />
        You can follow the video below:
      </Typography>
      <video autoPlay loop muted style={{ width: "100%" }}>
        <source src={video} type="video/mp4" />
        Sorry your browser does not support MOV videos.
      </video>
      <Typography variant="h6" component="h6" paragraph gutterBottom>
        You can click on show code at anytime to see the code. <br />
        As this is the first tutorial, every thing will be coded for you.
        However, from the next tutorial, get ready for some proper coding 😁.
      </Typography>
    </Box>
  );
};

export default Step1;
