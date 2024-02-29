use crate::TailwindInstance;
use std::fmt::{Display, Formatter};

#[doc=include_str!("readme.md")]
#[derive(Debug)]
pub struct TailwindScreenReader {
    sr_only: bool,
}

impl Display for TailwindScreenReader {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        if !self.sr_only {
            f.write_str("not-")?
        }
        f.write_str("sr-only")
    }
}

impl TailwindInstance for TailwindScreenReader {}

impl TailwindScreenReader {
    /// https://tailwindcss.com/docs/screen-readers
    #[inline]
    pub fn new(sr_only: bool) -> Self {
        Self { sr_only }
    }
}
