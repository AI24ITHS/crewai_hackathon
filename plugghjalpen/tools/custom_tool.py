from crewai.tools import BaseTool
from typing import Type, List, Optional, Any, Dict
from pydantic import BaseModel, Field
#from crewai_tools import ScrapeWebsiteTool
#import plugghjalpen.agent_settings as agent_settings
import os
import httpx
import json


class PerplexitySearchTool:
    name = "perplexity_search"
    description = "Sök på internet med hjälp av Perplexity AIs API för att hitta relevant och aktuell information"

    def func(self, query: str, max_results: int = 5) -> str:
        """Kör sökningen med hjälp av Perplexity's API."""
        api_key = os.getenv("PERPLEXITY_API_KEY")
        if not api_key:
            raise ValueError("PERPLEXITY_API_KEY environment variable is not set")

        headers = {
            "accept": "application/json",
            "content-type": "application/json",
            "authorization": f"Bearer {api_key}"
        }

        url = "https://api.perplexity.ai/chat/completions"
        
        payload = {
            "model": "sonar-reasoning",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant that provides accurate search results. Always include source links at the end of your response in a clear format. Reply in Swedish."
                },
                {
                    "role": "user",
                    "content": f"Search for: {query}\n\nPlease provide relevant information and include source links at the end of your response. Reply in Swedish."
                }
            ]
        }

        try:
            with httpx.Client(timeout=30.0) as client:
                response = client.post(url, headers=headers, json=payload)
                
                if response.status_code == 401:
                    return "Error: Invalid API key. Please check your Perplexity API key configuration."
                elif response.status_code == 400:
                    error_data = response.json()
                    return f"Error: {error_data.get('error', {}).get('message', 'Bad Request')}"
                
                response.raise_for_status()
                data = response.json()

                if "choices" in data and len(data["choices"]) > 0:
                    search_results = data["choices"][0]["message"]["content"]
                    
                    # Extract any URLs from the response using a more structured format
                    response_parts = search_results.split("\n\n")
                    main_content = []
                    sources = []
                    
                    for part in response_parts:
                        if part.lower().startswith(("source", "reference", "link")):
                            sources.append(part)
                        else:
                            main_content.append(part)
                    
                    formatted_response = "\n\n".join(main_content)
                    if sources:
                        formatted_response += "\n\nSources:\n" + "\n".join(sources)
                    
                    return formatted_response
                else:
                    return "No results found."

        except httpx.HTTPError as e:
            error_msg = f"Error performing search: {str(e)}"
            if hasattr(e, 'response') and e.response is not None:
                error_msg += f"\nResponse: {e.response.text}"
            return error_msg
        except Exception as e:
            return f"Unexpected error: {str(e)}"

    async def _arun(self, query: str, max_results: int = 5) -> str:
        """Async version of the search tool."""
        # For now, we'll just call the sync version
        return self.func(query, max_results) 

# To enable scrapping any website it finds during it's execution
# scrapetool = ScrapeWebsiteTool()

# sources = agent_settings.sources

# class scrapeItTool(BaseTool):
#     name="ScrapeItTool"
#     description="Scrapar innehållet från angivna URL:er"

#     def _run(self, sources: sources):
#         results = []
#         for website in sources:
#             tool_instance = ScrapeWebsiteTool(website_url=website)
#             result = tool_instance.run()
#             results.append(result)
#         return results
    

# These are the examples from the default installation of crewai
class MyCustomToolInput(BaseModel):
    """Input schema for MyCustomTool."""
    argument: str = Field(..., description="Description of the argument.")

class MyCustomTool(BaseTool):
    name: str = "Name of my tool"
    description: str = (
        "Clear description for what this tool is useful for, you agent will need this information to use it."
    )
    args_schema: Type[BaseModel] = MyCustomToolInput

    def _run(self, argument: str) -> str:
        # Implementation goes here
        return "this is an example of a tool output, ignore it and move along."