// types.d.ts

// Define the HelperBars module
declare namespace HelperBars {
  /**
   * Interface representing a bar object
   * Contains properties for bar configuration
   */
  interface Bar {
    barID: number; //ID for this bar
    minValue: number; // Initial value of the bar
    currentValue: number; // Current value of the bar
    maxValue: number; // Maximum value of the bar
    xPosition: number; // X position of the bar
    yPosition: number; // Y position of the bar
    backgroundTemplate: string; // Template for the bar background
    foregroundTemplate: string; // Template for the bar foreground
    orientation: string; // Orientation of the bar (horizontal or vertical)
    _backgroundTemplateWidth: string;
    _backgroundTemplateHeight: string;
    _foregroundTemplateWidth: string;
    _foregroundTemplateHeight: string;
  }

  /**
   * Function to create a new bar instance
   * @catnipIgnore
   * @param barID Id for this bar
   * @param minValue Initial value of the bar
   * @param currentValue Current value of the bar
   * @param maxValue Maximum value of the bar
   * @param xPosition X position of the bar
   * @param yPosition Y position of the bar
   * @param backgroundTemplate Template for the bar background
   * @param foregroundTemplate Template for the bar foreground
   * @param orientation Orientation of the bar (horizontal or vertical)
   * @returns A new Bar instance
   */
  function createBar(barID: number, minValue: number, currentValue: number, maxValue: number, xPosition: number, yPosition: number, backgroundTemplate: string, foregroundTemplate: string, orientation: string): Bar;

  /**
   * Function to do heal
   * @catnipIgnore
   * @param bar Id for this bar
   * @param amount Amoutn to decrease
   * @returns nothing
   */
  function increase(bar: Bar, amount: number): void;

  /**
   * Function to do damage
   * @catnipIgnore
   * @param bar Id for this bar
   * @param amount Amoutn to decrease
   * @returns nothing
   */
  function decrease(bar: Bar, amount: number): void;
  
  /**
   * Function to check onStep bar width.
   * @catnipIgnore
   * @param bar Id for this bar
   * @returns nothing
   */
  function currentBarStatus(bar: Bar): void;

  /**
   * @catnipIgnore
   */
  function calculateBarSize(current: number, max: number, barMaxSize: number): void;

}