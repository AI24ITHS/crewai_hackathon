#!/usr/bin/env python
import sys
import warnings
#import plugghjalpen.agent_settings as agent_settings
from plugghjalpen.crew import Plugghjalpen

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

# This main file is intended to be a way for you to run your
# crew locally, so refrain from adding unnecessary logic into this file.
# Replace with inputs you want to test with, it will automatically
# interpolate any tasks and agents information

sources = ['https://docs.crewai.com/introduction']

def run():
    """
    Run the crew.
    """
    inputs = {
        'topic': 'Att bygga crews med AI-agenter med Crew AI',
        'webpages': sources
    }

    Plugghjalpen().crew().kickoff(inputs=inputs)


def train():
    """
    Train the crew for a given number of iterations.
    """
    inputs = {
        "topic": "Att bygga crews med AI-agenter med Crew AI"
    }
    try:
        Plugghjalpen().crew().train(n_iterations=int(sys.argv[1]), filename=sys.argv[2], inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while training the crew: {e}")

def replay():
    """
    Replay the crew execution from a specific task.
    """
    try:
        Plugghjalpen().crew().replay(task_id=sys.argv[1])

    except Exception as e:
        raise Exception(f"An error occurred while replaying the crew: {e}")

def test():
    """
    Test the crew execution and returns the results.
    """
    inputs = {
        "topic": "Att bygga crews med AI-agenter med Crew AI"
    }
    try:
        Plugghjalpen().crew().test(n_iterations=int(sys.argv[1]), openai_model_name=sys.argv[2], inputs=inputs)

    except Exception as e:
        raise Exception(f"An error occurred while replaying the crew: {e}")
