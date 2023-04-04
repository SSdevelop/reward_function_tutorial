import * as Blockly from 'blockly';
// import 'blockly/python.js';

export const getBlocks = () => {
  let allBlocks = [];
  Blockly.getMainWorkspace().getAllBlocks().forEach((block) => {
    allBlocks.push(block.type);
  });
  return allBlocks;
};

Blockly.Blocks["reward_function"] = {
  init: function () {
    this.appendStatementInput("code")
      .setCheck(null)
      .appendField("Reward Function");
    this.setColour(165);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// Blockly.Python["reward_function"] = function(block) {
//   var statements_code = Blockly.Python.statementToCode(block, "code");
//   // TODO: Assemble Python into code variable.
//   var code =
//     "def reward_function(params):\n" + statements_code + "\n  return reward\n";
//   return code;
// };

Blockly.Blocks["reward"] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set reward to")
        .appendField(new Blockly.FieldNumber(1, 0, 1, 0.0001), "REWARD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Blockly.Python["reward"] = function (block) {
//   var value_reward = Blockly.Python.valueToCode(
//     block,
//     "REWARD",
//     Blockly.Python.ORDER_ATOMIC
//   );
//   // TODO: Assemble Python into code variable.
//   if (value_reward === "") value_reward = "0";
//   var code = "reward = " + value_reward + "\n";
//   return code;
// };

Blockly.Blocks["reward_access"] = {
  init: function () {
    this.appendDummyInput().appendField("reward");
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// Blockly.Python["reward_access"] = function (block) {
//   // TODO: Assemble Python into code variable.
//   var code = "reward";
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Python.ORDER_NONE];
// };

const parameters = [
  "all_wheels_on_track",
  "x",
  "y",
  "distance_from_center",
  "speed",
  "steering_angle",
  "heading",
  "crashed",
  "track_width",
];
parameters.forEach((parameter) => {
  Blockly.Blocks[`${parameter}_init`] = {
    init: function () {
      this.appendDummyInput().appendField(`initialize ${parameter}`);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
      this.setTooltip("");
      this.setHelpUrl("");
    },
  };

  // Blockly.Python[`${parameter}_init`] = function (block) {
  //   var code = `${parameter} = params["${parameter}"]\n`;
  //   return code;
  // };

  Blockly.Blocks[`${parameter}_access`] = {
    init: function () {
      this.appendDummyInput().appendField(parameter);
      this.setOutput(true, null);
      this.setColour(30);
      this.setTooltip("");
      this.setHelpUrl("");
    },
    onchange: function(){
      let allBlocks = getBlocks();
      if (allBlocks.includes(`${parameter}_init`)) {
        this.setEnabled(true);
      } else {
        this.setEnabled(false);
      }
    }
  };

  // Blockly.Python[`${parameter}_access`] = function (block) {
  //   var code = `${parameter}`;
  //   return [code, Blockly.Python.ORDER_NONE];
  // };
});

Blockly.Blocks["wheels_on_track_check"] = {
  init: function () {
    let allBlocks = getBlocks();
    this.appendDummyInput().appendField("check if all wheels are on track");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  onchange: function() {
    let allBlocks = getBlocks();
    if (allBlocks.includes("all_wheels_on_track_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  }
};

Blockly.Blocks['check_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Check if speed is less than")
        .appendField(new Blockly.FieldNumber(0, 0, 4, 0.0001), "SPEED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function() {
    let allBlocks = getBlocks();
    if (allBlocks.includes("speed_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  }
};

// Blockly.Python["wheels_on_track_check"] = function (block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = "if all_wheels_on_track:\n  reward = 0.0001\n";
//   return code;
// };

Blockly.Blocks["markers_init"] = {
  init: function () {
      this.appendDummyInput().appendField(`initialize markers`);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
      this.setTooltip("");
      this.setHelpUrl("");
  },
  onchange: function(){
    let allBlocks = getBlocks();
    if (allBlocks.includes("track_width_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  }
};

Blockly.Blocks["marker1_access"] = {
  init: function () {
    this.appendDummyInput().appendField('marker1');
      this.setOutput(true, null);
      this.setColour(30);
      this.setTooltip("");
      this.setHelpUrl("");
  },
  onchange: function(){
    let allBlocks = getBlocks();
    if (allBlocks.includes("markers_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  },
};

Blockly.Blocks["marker2_access"] = {
  init: function () {
    this.appendDummyInput().appendField('marker2');
      this.setOutput(true, null);
      this.setColour(30);
      this.setTooltip("");
      this.setHelpUrl("");
  },
  onchange: function(){
    let allBlocks = getBlocks();
    if (allBlocks.includes("markers_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  },
};

Blockly.Blocks["marker3_access"] = {
  init: function () {
    this.appendDummyInput().appendField('marker3');
      this.setOutput(true, null);
      this.setColour(30);
      this.setTooltip("");
      this.setHelpUrl("");
  },
  onchange: function(){
    let allBlocks = getBlocks();
    if (allBlocks.includes("markers_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  },
};

for(let i = 0; i < 3; i++) {
  Blockly.Blocks[`check_marker${i+1}`] = {
    init: function() {
      this.appendDummyInput()
          .appendField(`Check if distance from center is near marker${i+1}`)
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    },
    onchange: function() {
      let allBlocks = getBlocks();
      if (allBlocks.includes("markers_init")) {
        this.setEnabled(true);
      } else {
        this.setEnabled(false);
      }
    }
  };
}

Blockly.Blocks['check_steering'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Check if Steering is greater than")
        .appendField(new Blockly.FieldNumber(0, -30, 30, 0.0001), "ANGLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  onchange: function() {
    let allBlocks = getBlocks();
    if (allBlocks.includes("steering_angle_init")) {
      this.setEnabled(true);
    } else {
      this.setEnabled(false);
    }
  }
};

